// ContinueLearningCard.jsx — The featured "Continue Learning" card with progress bar

import React from "react";
import "../styles/ContinueLearningCard.css";

/**
 * @param {string} title       - Program name
 * @param {string} description - Short tagline
 * @param {number} progress    - Percentage 0–100
 * @param {string} tag         - Badge label (e.g. "Beginner")
 */
const ContinueLearningCard = ({ title, description, progress, tag }) => {
  return (
    <div className="clc">
      {/* Decorative icon / visual */}
      <div className="clc__visual">
        <span className="clc__icon">⛩️</span>
      </div>

      {/* Content */}
      <div className="clc__content">
        {tag && <span className="clc__tag">{tag}</span>}
        <h2 className="clc__title">{title}</h2>
        <p className="clc__description">{description}</p>

        {/* Progress */}
        <div className="clc__progress-section">
          <span className="clc__progress-label">Progress</span>
          <span className="clc__progress-pct">{progress}%</span>
        </div>
        <div className="clc__progress-bar-track">
          <div
            className="clc__progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContinueLearningCard;
