// src/components/PostCard.js
import React from "react";

export default function PostCard({ post, onOpen }) {
  const MINUTE = 1000 * 60;
  const timeAgo = Math.floor((Date.now() - post.createdAt) / MINUTE);

  // CATEGORY COLORS
  const catColor = {
    Accident: "#ef4444",
    Weather: "#3b82f6",
    Event: "#10b981",
    Traffic: "#f59e0b",
    Update: "#6b7280",
  }[post.cat] || "#6b7280";

  const isTextOnly = !post.img;

  return (
    <div
      style={{
        ...styles.card,
        ...(isTextOnly ? styles.textOnlyCard : {}),
      }}
      onClick={() => onOpen(post)}
    >
      {/* TOP: USER ROW */}
      <div style={styles.userRow}>
        <img
          src={`https://api.dicebear.com/7.x/personas/svg?seed=${post.user}`}
          alt="avatar"
          style={styles.avatar}
        />

        <div style={styles.userInfo}>
          <div style={styles.username}>
            {post.user}
            {post.verifiedUser && <span style={styles.check}>✓</span>}
          </div>

          <div style={styles.time}>{timeAgo}m ago · {post.location || "Unknown"}</div>
        </div>

        <div style={{ ...styles.catTag, backgroundColor: catColor }}>
          {post.cat || "Update"}
        </div>
      </div>

      {/* IMAGE OR TEXT POST */}
      {!isTextOnly && (
        <img src={post.img} alt="media" style={styles.image} />
      )}

      {/* BODY TEXT */}
      <div style={styles.text}>{post.text}</div>

      {/* FOOTER STATS */}
      <div style={styles.footer}>
        <span style={styles.views}>👁 {post.views ?? 0}</span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    borderRadius: 20,
    padding: 14,
    marginBottom: 22,
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },

  textOnlyCard: {
    padding: "18px 14px",
  },

  cardHover: {
    transform: "scale(1.01)",
    boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
  },

  userRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: "50%",
  },

  userInfo: {
    flex: 1,
  },

  username: {
    fontWeight: 800,
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    gap: 4,
  },

  check: {
    background: "#3b82f6",
    color: "white",
    borderRadius: 6,
    padding: "0px 5px",
    fontSize: 11,
    fontWeight: 700,
  },

  time: {
    fontSize: 12,
    color: "#6b7280",
  },

  catTag: {
    padding: "4px 10px",
    borderRadius: 999,
    color: "white",
    fontSize: 12,
    fontWeight: 700,
  },

  image: {
    width: "100%",
    height: 260,
    objectFit: "cover",
    borderRadius: 14,
    marginBottom: 12,
  },

  text: {
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 1.4,
  },

  footer: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: 13,
    color: "#6b7280",
    fontWeight: 600,
  },

  views: {
    paddingRight: 10,
  },
};
