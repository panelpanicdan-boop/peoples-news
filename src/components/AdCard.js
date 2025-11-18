// src/components/AdCard.js
import React from "react";

export default function AdCard({ ad }) {
  return (
    <div style={styles.card}>
      <img src={ad.img} alt="ad" style={styles.img} />
      <div style={styles.body}>
        <div style={styles.brand}>Sponsored · {ad.brand}</div>
        <div style={styles.text}>{ad.text}</div>
        <div style={styles.views}>{ad.views} views</div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
  },
  img: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  body: {
    padding: 14,
  },
  brand: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
    fontWeight: 600,
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  views: {
    fontSize: 12,
    color: "#9ca3af",
  },
};
