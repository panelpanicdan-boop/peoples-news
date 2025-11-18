// src/tabs/MapTab.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapTab({ posts }) {
  // Pick a default center (e.g., NYC)
  const center = [40.7128, -74.006];

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Map</h2>

      <div style={styles.mapWrap}>
        <MapContainer
          center={center}
          zoom={11}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap"
          />

          {posts
            .filter((p) => p.lat && p.lng)
            .map((p) => (
              <Marker key={p.id} position={[p.lat, p.lng]}>
                <Popup>
                  <strong>{p.user}</strong>
                  <br />
                  {p.text}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: 10,
    paddingBottom: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 900,
    marginBottom: 12,
  },
  mapWrap: {
    width: "100%",
    height: "75vh",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
};
