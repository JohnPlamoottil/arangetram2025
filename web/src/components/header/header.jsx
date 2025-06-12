import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import "../../vendor/fonts.css";
// import corner from "../../assets/decorative_corner.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

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
                Please select the appropirate dancer from the dropdown selecton
                on the leftside of this page.
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
