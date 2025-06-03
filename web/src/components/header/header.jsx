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
                <a href="/program" className="nav-link">
                  Repertoire (Program)
                </a>
                <a href="/instructor" className="nav-link">
                  Guru (Instructor)
                </a>
                <a href="/orchestra" className="nav-link">
                  Musicians (Orchestra)
                </a>
                <a href="/venue" className="nav-link">
                  Venue (Date & Location)
                </a>
                <a href="/livestream" className="nav-link">
                  Watch Livestream
                </a>
                <a href="/faqs" className="nav-link">
                  Frequently Asked Q?s FAQs
                </a>
              </nav>
              <div className="performersheader">
                Andrea Thomas, Jana Scaria, Michelle Eapen,
              </div>
              <div className="performersheader">
                Rose Thomas, Jenna Plamoottil, Amarya Koola
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
