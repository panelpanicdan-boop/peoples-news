// src/tabs/AccountTab.js
import React from "react";
import PostCard from "../components/PostCard";

export default function AccountTab({ user, posts, setModalPost }) {
  // Most-viewed posts
  const top3 = [...posts]
    .filter((p) => !p.ad)
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <img
          src={`https://api.dicebear.com/7.x/personas/svg?seed=${user.name}`}
          alt="avatar"
          style={styles.avatar}
        />
        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.bio}>{user.bio}</p>

        <div style={styles.statsRow}>
          <div style={styles.statBox}>
            <strong>{user.followers}</strong>
            <span>Followers</span>
          </div>

          <div style={styles.statBox}>
            <strong>{user.following}</strong>
            <span>Following</span>
          </div>

          <div style={styles.statBox}>
            <strong>{posts.length}</strong>
            <span>Posts</span>
          </div>
        </div>
      </div>

      {/* TOP 3 MOST VIEWED */}
      <h3 style={styles.sectionTitle}>Top 3 Posts</h3>
      <div style={styles.topRow}>
        {top3.map((post) => (
          <div
            key={post.id}
            style={styles.topCard}
            onClick={() => setModalPost(post)}
          >
            {post.img ? (
              <img src={post.img} alt="thumb" style={styles.topImg} />
            ) : (
              <div style={styles.textOnlyTop}>{post.text}</div>
            )}
          </div>
        ))}
      </div>

      {/* FULL FEED GRID */}
      <h3 style={styles.sectionTitle}>All Posts</h3>

      <div style={styles.grid}>
        {posts
          .filter((p) => !p.ad)
          .map((post) => (
            <div
              key={post.id}
              style={styles.gridItem}
              onClick={() => setModalPost(post)}
            >
              {post.img ? (
                <img src={post.img} alt="grid" style={styles.gridImg} />
              ) : (
                <div style={styles.gridTextBox}>{post.text}</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

const styles = {
  page: { paddingBottom: 80 },
  header: {
    textAlign: "center",
    padding: 20,
    background: "white",
    borderRadius: 20,
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    marginBottom: 10,
  },
  name: { fontSize: 22, fontWeight: 900 },
  bio: { fontSize: 14, color: "#4b5563", marginTop: 6 },

  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    marginTop: 16,
  },

  statBox: {
    textAlign: "center",
    fontSize: 13,
    color: "#374151",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 10,
    marginTop: 10,
  },

  topRow: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
  },

  topCard: {
    flex: 1,
    height: 120,
    borderRadius: 14,
    overflow: "hidden",
    background: "#e5e7eb",
    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
    cursor: "pointer",
  },

  topImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  textOnlyTop: {
    padding: 10,
    fontSize: 13,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 6,
  },

  gridItem: {
    height: 110,
    borderRadius: 8,
    overflow: "hidden",
    background: "#e5e7eb",
    cursor: "pointer",
  },

  gridImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  gridTextBox: {
    padding: 6,
    fontSize: 12,
  },
};
