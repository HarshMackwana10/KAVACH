// Header.jsx — Top navigation bar with KAVACH branding

import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo + Brand */}
        <div className="header__brand">
          <div className="header__logo">
            <span className="header__logo-icon">K</span>
          </div>
          <div className="header__title-group">
            <span className="header__title">KAVACH</span>
            <span className="header__subtitle">Professional Self-Defense Training</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="header__nav">
          <a href="#" className="header__nav-link header__nav-link--active">Home</a>
          <a href="#" className="header__nav-link">Features</a>
          <a href="#" className="header__nav-link">Diet</a>
          <a href="#" className="header__nav-link">Coaching</a>
          <a href="#" className="header__nav-link">Profile</a>
        </nav>

        {/* User Avatar */}
        <div className="header__user">
          <div className="header__avatar">S</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
