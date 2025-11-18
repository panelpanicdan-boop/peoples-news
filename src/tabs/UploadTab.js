// src/tabs/UploadTab.js
import React, { useState } from "react";

export default function UploadTab({ posts, setPosts }) {
  const [img, setImg] = useState(null);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Update");

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
    }
  }

  function handleSubmit() {
    if (!img && text.trim() === "") {
      return alert("Please add text or an image");
    }

    const newPost = {
      id: "p" + Math.random().toString(36).slice(2),
      user: "You",
      cat: category,
      text,
      img: img || null,
      views: Math.floor(Math.random() * 300),
      createdAt: Date.now(),
      verifiedUser: true,
      location: "Your Location (mock)",
      lat: 40.73 + Math.random() * 0.05,
      lng: -74.17 + Math.random() * 0.05,
    };

    setPosts([newPost, ...posts]);
    alert("Post uploaded!");

    setImg(null);
    setText("");
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Upload</h2>

      {/* CATEGORY */}
      <div style={styles.card}>
        <div style={styles.label}>Category</div>
        <select
          style={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Accident">Accident</option>
          <option value="Weather">Weather</option>
          <option value="Event">Event</option>
          <option value="Traffic">Traffic</option>
          <option value="Update">General Update</option>
        </select>
      </div>

      {/* IMAGE UPLOAD */}
      <div style={styles.card}>
        <div style={styles.label}>Upload Image (optional)</div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {img && (
          <img src={img} alt="preview" style={styles.preview} />
        )}
      </div>

      {/* TEXT INPUT */}
      <div style={styles.card}>
        <div style={styles.label}>Text (optional)</div>
        <textarea
          style={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe what happened…"
        />
      </div>

      {/* SUBMIT */}
      <button style={styles.submitBtn} onClick={handleSubmit}>
        Post Update
      </button>
    </div>
  );
}

const styles = {
  page: { paddingBottom: 60 },
  title: { fontSize: 24, fontWeight: 900, marginBottom: 16 },

  card: {
    background: "white",
    padding: 14,
    borderRadius: 16,
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 6,
  },

  select: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    border: "1px solid #d1d5db",
    fontSize: 14,
  },

  preview: {
    width: "100%",
    height: 220,
    objectFit: "cover",
    borderRadius: 12,
    marginTop: 10,
  },

  textarea: {
    width: "100%",
    height: 90,
    borderRadius: 12,
    border: "1px solid #d1d5db",
    fontSize: 14,
    padding: 10,
    background: "#f9fafb",
  },

  submitBtn: {
    width: "100%",
    padding: 14,
    background: "linear-gradient(135deg,#3b82f6,#ec4899)",
    color: "white",
    border: "none",
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
  },
};
