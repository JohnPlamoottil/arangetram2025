import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
// import "./vendor/fonts.css";

const Header = () => {
  const [menuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Text */}
        <div className="header-content">
          <div className="header-top">
            <div>
              <h1 className="title">Welcome to Our Arangetram</h1>
              <h2 className="subtitle">A Night to Remember</h2>

              {/* Navigation Links */}
              <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <a href="/" className="nav-link">
                  Home
                </a>
                <a href="/about" className="nav-link">
                  Repertoire (Program)
                </a>
                <a href="/program" className="nav-link">
                  Guru (Instructor)
                </a>
                <a href="/program" className="nav-link">
                  Musicians (Orchestra)
                </a>
                <a href="/program" className="nav-link">
                  Venue (Date & Location)
                </a>
                <a href="/program" className="nav-link">
                  Watch Livestream
                </a>
                <a href="/program" className="nav-link">
                  Frequently Asked Q?s FAQs
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
