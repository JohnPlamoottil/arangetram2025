// src/Header.jsx

import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <img src="src/assets/logo.png"></img>
      <h1 style={styles.title}>Our Arangetram Performance 2025</h1>
      <nav>
        <a href="/" style={styles.link}>
          Home
        </a>
        <a href="/about" style={styles.link}>
          About
        </a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "1rem",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  link: {
    marginLeft: "1rem",
    color: "white",
    textDecoration: "none",
  },
};

export default Header;
