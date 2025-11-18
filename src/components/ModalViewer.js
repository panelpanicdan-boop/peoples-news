// src/components/ModalViewer.js
import React from "react";

export default function ModalViewer({ post, onClose }) {
  const MINUTE = 1000 * 60;
  const timeAgo = Math.floor((Date.now() - post.createdAt) / MINUTE);

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {/* Image or text-only */}
        {post.img ? (
          <img src={post.img} alt="full" style={styles.image} />
        ) : (
          <div style={styles.textOnlyBox}>{post.text}</div>
        )}

        {/* Info */}
        <div style={styles.info}>
          <div style={styles.user}>
            <img
              src={`https://api.dicebear.com/7.x/personas/svg?seed=${post.user}`}
              alt="avatar"
              style={styles.avatar}
            />
            <strong>{post.user}</strong>
          </div>

          <p style={styles.body}>{post.text}</p>

          <div style={styles.stats}>
            <span>{timeAgo}m ago</span>
            <span> · </span>
            <span>{post.views} views</span>
          </div>

          {post.location && (
            <div style={styles.location}>📍 {post.location}</div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 9999,
  },
  modal: {
    background: "white",
    borderRadius: 20,
    maxWidth: 500,
    width: "100%",
    boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
    overflow: "hidden",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    border: "none",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    borderRadius: "999px",
    width: 34,
    height: 34,
    fontSize: 18,
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
  },
  textOnlyBox: {
    padding: 20,
    fontSize: 20,
    lineHeight: 1.5,
    fontWeight: 500,
  },
  info: {
    padding: 20,
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: "50%",
  },
  body: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 1.5,
  },
  stats: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 10,
  },
  location: {
    fontSize: 14,
    color: "#4b5563",
    marginTop: 4,
  },
};
