// src/tabs/LiveTab.js
import React from "react";

export default function LiveTab({ user, isLive, handleGoLive, stopLive }) {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Live Broadcast</h2>

      {!isLive && (
        <button style={styles.goLiveBtn} onClick={handleGoLive}>
          Go Live
        </button>
      )}

      {isLive && (
        <div style={styles.liveBox}>
          <div style={styles.liveBadge}>● LIVE</div>

          <div style={styles.liveVideo}>
            <div style={styles.liveText}>Live Stream Active (Mock)</div>
          </div>

          <button style={styles.stopBtn} onClick={stopLive}>
            End Live
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: { paddingBottom: 60 },
  title: { fontSize: 24, fontWeight: 900, marginBottom: 20 },

  goLiveBtn: {
    width: "100%",
    padding: 14,
    borderRadius: 12,
    background: "linear-gradient(135deg,#ef4444,#f97316)",
    border: "none",
    color: "white",
    fontWeight: 800,
    fontSize: 18,
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(239,68,68,0.45)",
  },

  liveBox: {
    background: "white",
    padding: 14,
    borderRadius: 16,
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  },

  liveBadge: {
    background: "#ef4444",
    padding: "4px 12px",
    borderRadius: 999,
    color: "white",
    fontWeight: 900,
    display: "inline-block",
    marginBottom: 12,
  },

  liveVideo: {
    width: "100%",
    height: 260,
    borderRadius: 14,
    background: "#1f2937",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  liveText: {
    color: "#9ca3af",
    fontSize: 16,
  },

  stopBtn: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    background: "#ef4444",
    border: "none",
    color: "white",
    fontWeight: 800,
    fontSize: 16,
    cursor: "pointer",
  },
};
