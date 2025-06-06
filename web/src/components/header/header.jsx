import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import "../../vendor/fonts.css";
import corner from "../../assets/decorative_corner.svg";
// import Navigation from "../navigation-links/navigation-links";

const Header = () => {
  // const [menuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />
        <img src={corner} alt="Corner" className="right-corner" />

        {/* Text */}
        <div className="header-content">
          <div className="header-top">
            <div>
              <h1 className="title">Welcome to Our Arangetram</h1>
              <h2 className="subtitle">A Night to Remember</h2>
              {/* <Navigation /> */}
              <div className="performersheader">
                Michelle Eapen, Andrea Thomas, Jana Scaria, Rose Thomas, Jenna
                Plamoottil, Amarya Koola
              </div>
              <div className="instructions">
                Please select the appropirate dancer from the dropdown selecton
                on the leftside of this page.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
