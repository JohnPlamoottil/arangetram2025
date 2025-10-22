import React from "react";
import "./header.css";
import Navigation from "../navigation-links/navigation-links";
import logo from "../../assets/logo.png";
import "../../vendor/fonts.css";
import tillana from "../../assets/tillana.png";

const Header = () => {
  return (
    <header className="header">
      {/* <Navigation /> */}
      <div className="header-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* slanted group image */}
        <img className="green_varnum_corner" src={tillana} alt="varnum group" />
        {/* <div className="image-wrapper">
          <img
            src={green_varnum_corner}
            alt="Sliding In"
            className="slide-in"
          />
        </div> */}

        {/* Text */}
        <div className="header-content">
          <div className="header-top">
            <div>
              <h1 className="title">Soorya Dance School™</h1>
              <h2 className="subtitle">Presents</h2>
              <h1 className="title_main_title">Samarpanam</h1>
              <h2 className="subtitle">Bharatanatyam Arangetram</h2>
              {/* <Navigation /> */}
              <h3 className="date">
                Saturday, June 21st 2025 @ 4:00pm CST <br />
                Doors Open at 3:30pm <br />
              </h3>
              <div className="instructions">
                Please select the appropirate dancer <br />
                from the dropdown selecton <br />
                to view their Shishya & RSVP <br />
              </div>
              <p className="QR_code_description">
                {" "}
                Please Visit Our 'Bharatanatyam Journey' <br />
                Below in the Footer-Right Side
              </p>
            </div>
          </div>
        </div>
        {/* <img src={corner} alt="Corner" className="right-corner" /> */}
      </div>
    </header>
  );
};
export default Header;
