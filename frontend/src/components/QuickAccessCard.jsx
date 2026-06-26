// QuickAccessCard.jsx — Small icon + label card for quick navigation

import React from "react";
import "../styles/QuickAccessCard.css";

/**
 * @param {string} icon  - Emoji icon
 * @param {string} label - Display label
 */
const QuickAccessCard = ({ icon, label }) => {
  return (
    <button className="quick-access-card">
      <span className="quick-access-card__icon">{icon}</span>
      <span className="quick-access-card__label">{label}</span>
    </button>
  );
};

export default QuickAccessCard;
