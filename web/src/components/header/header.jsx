import React from "react";
import "./header.css";
import "../../components/pages/home/slidingImage.css";
import logo from "../../assets/logo.png";
import "../../vendor/fonts.css";
import green_varnum_corner from "../../assets/green_varnum_corner.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* slanted group image */}
        <img
          className="green_varnum_corner"
          src={green_varnum_corner}
          alt="varnum group"
        />

        {/* Text */}
        <div className="header-content">
          <div className="header-top">
            <div>
              <h1 className="title">Soorya Dance School</h1>
              <h2 className="subtitle">Presents</h2>
              <h1 className="title main_title">Samarpanam</h1>
              <h2 className="subtitle">Bharatanatyam Arangetram</h2>
              {/* <Navigation /> */}
              <h3 className="performersheader">
                Saturday, June 21st 2025 @ 3pm CST
              </h3>
              <div className="instructions">
                Please select the appropirate dancer <br />
                from the dropdown selecton <br />
                to view their Shishya. <br />
              </div>
            </div>
          </div>
        </div>
        {/* <img src={corner} alt="Corner" className="right-corner" /> */}
      </div>
    </header>
  );
};
export default Header;
