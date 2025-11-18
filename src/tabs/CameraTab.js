// src/tabs/CameraTab.js
import React, { useState } from "react";

export default function CameraTab({ posts, setPosts }) {
  const [preview, setPreview] = useState(null);

  function simulateCapture() {
    // Generate a random image placeholder
    const url = `https://picsum.photos/seed/${Math.random()}/500/350`;
    setPreview(url);
  }

  function savePhoto() {
    if (!preview) return alert("Take a photo first!");

    const newPost = {
      id: "p" + Math.random().toString(36).slice(2),
      user: "You",
      cat: "Update",
      text: "Captured on-scene",
      img: preview,
      views: Math.floor(Math.random() * 200),
      createdAt: Date.now(),
      verifiedUser: true,
      location: "Your Location (mock)",
      lat: 40.73 + Math.random() * 0.05,
      lng: -74.17 + Math.random() * 0.05,
    };

    setPosts([newPost, ...posts]);
    alert("Photo uploaded to feed!");
    setPreview(null);
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Camera</h2>

      <div style={styles.cameraBox}>
        {preview ? (
          <img src={preview} alt="preview" style={styles.preview} />
        ) : (
          <div style={styles.placeholder}>Camera Preview</div>
        )}
      </div>

      <button style={styles.btnPrimary} onClick={simulateCapture}>
        Take Photo (Mock)
      </button>

      <button style={styles.btnSubmit} onClick={savePhoto}>
        Save to Feed
      </button>
    </div>
  );
}

const styles = {
  page: { paddingBottom: 40 },
  title: { fontSize: 24, fontWeight: 900, marginBottom: 16 },

  cameraBox: {
    width: "100%",
    height: 260,
    background: "#1f2937",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  },

  placeholder: {
    color: "#9ca3af",
    fontSize: 16,
    letterSpacing: 1,
  },

  preview: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  btnPrimary: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg,#3b82f6,#ec4899)",
    color: "white",
    fontWeight: 700,
    fontSize: 16,
    marginBottom: 10,
    cursor: "pointer",
  },

  btnSubmit: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "none",
    background: "#10b981",
    color: "white",
    fontWeight: 700,
    fontSize: 16,
    cursor: "pointer",
  },
};
