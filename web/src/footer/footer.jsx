import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">Developed by JJ Plamoottil</p>
        <p className="footer__text">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
