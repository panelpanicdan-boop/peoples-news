// src/tabs/SettingsTab.js
import React from "react";

export default function SettingsTab({
  darkMode,
  setDarkMode,
  user,
  setUser,
  isLive,
  handleGoLive,
  stopLive,
  showTicker,
  setShowTicker,
  tickerMode,
  setTickerMode,
  tickerText,
  setTickerText,
}) {
  function verifyUser() {
    alert("ID verification (mock) — user verified.");
    setUser({ ...user, verified: true });
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Settings</h2>

      {/* APPEARANCE */}
      <div style={styles.card}>
        <h3 style={styles.section}>Appearance</h3>
        <label style={styles.row}>
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </label>
      </div>

      {/* MONETIZATION + ID VERIFICATION */}
      <div style={styles.card}>
        <h3 style={styles.section}>Monetization & Identity</h3>

        <div style={styles.row}>
          <span>Verified User</span>
          <span style={user.verified ? styles.verified : styles.unverified}>
            {user.verified ? "VERIFIED ✓" : "NOT VERIFIED"}
          </span>
        </div>

        {!user.verified && (
          <button style={styles.btn} onClick={verifyUser}>
            Verify My ID
          </button>
        )}

        <div style={styles.row}>
          <span>Lifetime Earnings</span>
          <strong>$0.00</strong>
        </div>

        <div style={styles.row}>
          <span>Total Views</span>
          <strong>0</strong>
        </di
