import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="src/assets/logo.png"></img>
      <h1 className="title">Our Arangetram Performance 2025</h1>
      <nav>
        <a href="/" className="link">
          Home
        </a>
        <a href="/about" className="link">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
