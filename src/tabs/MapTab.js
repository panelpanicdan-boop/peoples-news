// src/tabs/MapTab.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// Auto-center map on user geolocation
function AutoCenter() {
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        map.setView([pos.coords.latitude, pos.coords.longitude], 13);
      },
      () => {
        // fallback center if permission denied
        map.setView([40.7357, -74.1724], 12); // Newark
      }
    );
  }, [map]);

  return null;
}

export default function MapTab({ posts, setModalPost }) {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Live Map</h2>

      <MapContainer
        center={[40.7357, -74.1724]}
        zoom={12}
        style={styles.map}
        scrollWheelZoom
      >
        <AutoCenter />

        {/* DARK MATTER TILES */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href=\"https://carto.com/attributions\">CARTO</a>'
        />

        {posts
          .filter((p) => p.lat && p.lng)
          .map((p) => (
            <Marker key={p.id} position={[p.lat, p.lng]}>
              <Popup>
                <div style={{ width: 180 }}>
                  {!p.ad && (
                    <>
                      <img
                        src={p.img}
                        alt="thumb"
                        style={{
                          width: "100%",
                          height: 90,
                          objectFit: "cover",
                          borderRadius: 8,
                          marginBottom: 6,
                        }}
                      />
                      <div style={{ fontWeight: 700 }}>{p.user}</div>
                      <div style={{ fontSize: 13, margin: "4px 0" }}>
                        {p.text}
                      </div>
                      <div style={{ fontSize: 12, color: "#9ca3af" }}>
                        {Math.floor(
                          (Date.now() - p.createdAt) / (1000 * 60)
                        )}{" "}
                        min ago
                      </div>

                      <button
                        style={styles.btn}
                        onClick={() => setModalPost(p)}
                      >
                        View Post
                      </button>
                    </>
                  )}

                  {p.ad && (
                    <div>
                      <strong>Ad:</strong> {p.text}
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

const styles = {
  page: { paddingBottom: 40 },
  title: {
    fontSize: 24,
    fontWeight: 900,
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: "70vh",
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
  },
  btn: {
    marginTop: 6,
    width: "100%",
    padding: "6px 0",
    borderRadius: 8,
    border: "none",
    background: "linear-gradient(135deg,#3b82f6,#ec4899)",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 13,
  },
};
