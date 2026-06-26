// ProgramCard.jsx — Card for each martial arts training program

import React from "react";
import "../styles/ProgramCard.css";

/**
 * @param {string} name        - Program name
 * @param {string} description - Short tagline
 * @param {string} weeks       - Duration (e.g. "12 weeks")
 * @param {number} lessons     - Number of lessons
 * @param {string} badge       - Level badge: "Beginner" | "Intermediate" | "Advanced"
 * @param {string} iconBg      - CSS color for icon background
 * @param {string} icon        - Emoji icon
 * @param {number} progress    - Progress percentage (0 if not started)
 */
const ProgramCard = ({
  name,
  description,
  weeks,
  lessons,
  badge,
  iconBg,
  icon,
  progress,
}) => {
  // Determine badge color class
  const badgeClass =
    badge === "Intermediate"
      ? "program-card__badge--intermediate"
      : badge === "Advanced"
      ? "program-card__badge--advanced"
      : "program-card__badge--beginner";

  return (
    <div className="program-card">
      {/* Icon */}
      <div className="program-card__icon" style={{ backgroundColor: iconBg }}>
        <span>{icon}</span>
      </div>

      {/* Details */}
      <div className="program-card__details">
        <div className="program-card__top-row">
          <span className="program-card__name">{name}</span>
          <span className={`program-card__badge ${badgeClass}`}>{badge}</span>
        </div>
        <p className="program-card__desc">{description}</p>
        <div className="program-card__meta">
          <span>🕒 {weeks}</span>
          <span>📖 {lessons} lessons</span>
        </div>
        {/* Progress bar — only show if progress > 0 */}
        {progress > 0 && (
          <div className="program-card__progress-track">
            <div
              className="program-card__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
