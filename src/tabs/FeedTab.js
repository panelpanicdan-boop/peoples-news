// src/tabs/FeedTab.js
import React from "react";
import PostCard from "../components/PostCard";
import AdCard from "../components/AdCard";

export default function FeedTab({ posts, feedMode, setFeedMode, setModalPost }) {
  return (
    <section style={styles.page}>
      {/* FEED MODE SWITCH */}
      <div style={styles.toggleRow}>
        <button
          style={feedMode === "following" ? styles.activeBtn : styles.modeBtn}
          onClick={() => setFeedMode("following")}
        >
          Following
        </button>

        <button
          style={feedMode === "interested" ? styles.activeBtn : styles.modeBtn}
          onClick={() => setFeedMode("interested")}
        >
          Interested
        </button>
      </div>

      {/* FEED LIST */}
      <div style={styles.list}>
        {posts.map((p) =>
          p.ad ? (
            <AdCard key={p.id} ad={p} />
          ) : (
            <PostCard key={p.id} post={p} onOpen={setModalPost} />
          )
        )}
      </div>
    </section>
  );
}

const styles = {
  page: {
    paddingTop: 4,
    paddingBottom: 40,
  },

  toggleRow: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginBottom: 20,
  },

  modeBtn: {
    padding: "8px 18px",
    background: "#e5e7eb",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
    color: "#374151",
  },

  activeBtn: {
    padding: "8px 18px",
    background: "linear-gradient(135deg,#3b82f6,#ec4899)",
    color: "white",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    fontSize: 14,
  },

  list: {
    width: "100%",
  },
};
