import React from "react";
import "./footer.css";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const developers = [
//   "Developed by Kanna JJ Plamoottil",
//   "Developed by Wesley",
//   "Developed by Adam",
//   "Developed by Jane",
// ];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">Developed by Kanna JJ Plamoottil</p>
        <p className="footer__text">Developed by Kanna JJ Plamoottil</p>
        <p className="footer__text">Developed by Kanna JJ Plamoottil</p>
        <p className="footer__text">Developed by Kanna JJ Plamoottil</p>
        <p className="footer__text">Developed by Kanna JJ Plamoottil</p>
        <p className="footer__text">Developed by Kanna JJ Plamoottil</p>

        <p className="footer__text">{new Date().getFullYear()}</p>
        <div className="about__circle"></div>
        <div className="about__circle about__circle_animation_blurred"></div>
      </div>
      <div>
        <Link to="/video" className="nav-link">
          Bharatanatyam Journey 2018 to 2025
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
