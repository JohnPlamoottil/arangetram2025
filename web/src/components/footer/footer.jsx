import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about__circle"></div>
      <div className="about__circle about__circle_animation_blurred"></div>
      <div className="footer__content">
        <p className="footer__text">Developed by Kanna JJ Plamoottil</p>
        <p className="footer__text">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
