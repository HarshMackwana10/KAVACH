// StatCard.jsx — Reusable stat/metric card used in the dashboard grid

import React from "react";
import "../styles/StatCard.css";

/**
 * @param {string} icon       - Emoji or icon character
 * @param {string} label      - Card label (e.g. "Streak")
 * @param {string|number} value - Big display value
 * @param {string} sublabel   - Small helper text below value
 * @param {string} variant    - Color variant: "red" | "dark" | "green" | "orange"
 */
const StatCard = ({ icon, label, value, sublabel, variant = "dark" }) => {
  return (
    <div className={`stat-card stat-card--${variant}`}>
      <div className="stat-card__header">
        <span className="stat-card__icon">{icon}</span>
        <span className="stat-card__label">{label}</span>
      </div>
      <div className="stat-card__value">{value}</div>
      {sublabel && <div className="stat-card__sublabel">{sublabel}</div>}
    </div>
  );
};

export default StatCard;
