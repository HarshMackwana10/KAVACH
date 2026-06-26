// BottomNavbar.jsx — Mobile-style bottom navigation bar

import React, { useState } from "react";
import "../styles/BottomNavbar.css";

const navItems = [
  { icon: "🏠", label: "Home" },
  { icon: "⭐", label: "Features" },
  { icon: "🥗", label: "Diet" },
  { icon: "🎯", label: "Coaching" },
  { icon: "👤", label: "Profile" },
];

const BottomNavbar = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className="bottom-navbar">
      {navItems.map((item, index) => (
        <button
          key={item.label}
          className={`bottom-navbar__item ${active === index ? "bottom-navbar__item--active" : ""}`}
          onClick={() => setActive(index)}
        >
          <span className="bottom-navbar__icon">{item.icon}</span>
          <span className="bottom-navbar__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavbar;
