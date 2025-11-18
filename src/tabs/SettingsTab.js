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
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Settings</h2>

      {/* DARK MODE */}
      <div style={styles.card}>
        <div style={styles.label}>Dark Mode</div>
        <select
          style={styles.select}
          value={darkMode ? "on" : "off"}
          onChange={(e) => setDarkMode(e.target.value === "on")}
        >
          <option value="off">Off</option>
          <option value="on">On</option>
        </select>
      </div>

      {/* VERIFY ACCOUNT */}
      <div style={styles.card}>
        <div style={styles.label}>Identity Verification</div>
        {user.verified ? (
          <div style={styles.verified}>✔ Verified</div>
        ) : (
          <button
            style={styles.verifyBtn}
            onClick={() => setUser({ ...user, verified: true })}
          >
            Verify Identity (Mock)
          </button>
        )}
      </div>

      {/* LIVE STATUS */}
      <div style={styles.card}>
        <div style={styles.label}>Live Status</div>

        {!isLive ? (
          <button style={styles.liveBtn} onClick={handleGoLive}>
            Go Live
          </button>
        ) : (
          <button style={styles.stopLiveBtn} onClick={stopLive}>
            Stop Live
          </button>
        )}
      </div>

      {/* TICKER SETTINGS */}
      <div style={styles.card}>
        <div style={styles.label}>Ticker Display</div>

        <select
          style={styles.select}
          value={showTicker ? "on" : "off"}
          onChange={(e) => setShowTicker(e.target.value === "on")}
        >
          <option value="on">Show</option>
          <option value="off">Hide</option>
        </select>

        <div style={{ height: 10 }} />

        <div style={styles.label}>Ticker Mode</div>

        <select
          style={styles.select}
          value={tickerMode}
          onChange={(e) => setTickerMode(e.target.value)}
        >
          <option value="all">All Updates</option>
          <option value="stocks">Stocks</option>
          <option value="breaking">Breaking News</option>
          <option value="weather">Weather Alerts</option>
          <option value="traffic">Traffic Updates</option>
          <option value="local">Local</option>
          <option value="custom">Custom Text</option>
        </select>

        {tickerMode === "custom" && (
          <textarea
            style={styles.textarea}
            value={tickerText}
            onChange={(e) => setTickerText(e.target.value)}
            placeholder="Enter your own ticker text…"
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  page: { paddingBottom: 80 },
  title: { fontSize: 22, fontWeight: 900, marginBottom: 16 },
  card: {
    background: "white",
    p
