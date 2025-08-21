import React from "react";
import "./footer.css";
import Copyright from "../copyright/copyright";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import youtubelogo from "../../assets/youtubelogo.png";
import soorya_studio from "../../assets/soorya_studio.png";
import moms_daughters from "../../assets/moms_daughters.png";
import clc_venue_logo from "../../assets/clc_venue_logo.png";
import JLC_thumbnail from "../../assets/JLC_thumbnail.png";
import insta from "../../assets/insta.png";

const Footer = () => {
  function handleClick(e) {
    const button = e.target;
    button.classList.toggle("slide");
    const panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div>
          <h2 className="Contact_Us"> Contact Us </h2>
          <div className="box-item">
            <button className="accordion" onClick={handleClick}>
              Dance Director
            </button>
            <div className="panel">
              Dance Director
              <p>
                Jinoo Varghese <br />
                (847) 668-0349
              </p>
            </div>
          </div>
          <div className="box-container">
            <div>
              <div className="box-item">
                <button className="accordion" onClick={handleClick}>
                  Parents of Andrea
                </button>
                <div className="panel">
                  Jeril and Shilpa Thomas
                  <p>(708) 548-4971</p>
                </div>
              </div>
              <div className="box-item">
                <button className="accordion" onClick={handleClick}>
                  Parents of Michelle
                </button>
                <div className="panel">
                  Priyan and Jincy Eapen
                  <p>(224) 388-8571</p>
                </div>
              </div>
              <div className="box-item">
                <button className="accordion" onClick={handleClick}>
                  Parents of Jana
                </button>
                <div className="panel">
                  Santosh and Lija Scaria
                  <p>(847) 714-6548</p>
                </div>
              </div>
            </div>

            <div>
              <div className="box-item">
                <button className="accordion" onClick={handleClick}>
                  Parents of Rose
                </button>
                <div className="panel">
                  Bejoy and Marisa Thomas
                  <p>(847) 722-6976</p>
                </div>
              </div>
              <div className="box-item">
                <button className="accordion" onClick={handleClick}>
                  Parents of Jenna
                </button>
                <div className="panel">
                  John and Leena Plamoottil
                  <p>(847) 219-9914</p>
                </div>
              </div>
              <div className="box-item">
                <button className="accordion" onClick={handleClick}>
                  Parents of Amarya
                </button>
                <div className="panel">
                  John and Latha Chirayil Koola
                  <p>(773) 426-4993</p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-item">
            <button className="accordion" onClick={handleClick}>
              Web Developer
            </button>
            <div className="panel">
              Kanna JJ Plamoottil
              <p>(847) 338-6855</p>
            </div>
          </div>
        </div>
        {/* <div className="about__circle"></div>
        <div className="about__circle about__circle_animation_blurred"></div> */}
        <div className="FooterMidde_momsdaughter_clcvenue">
          <p className="Footer-Middle">
            Special Thanks to All of You for Attending Our Arangetram <br />
            <br />
            Photos updated in the Gallery Page. <br />
            <br />
            Reception with Dinner Provided at Dancer's Venue. <br />
          </p>
          <img
            className="moms_and_daughters"
            src={moms_daughters}
            alt="moms__daughters"
          ></img>
          <img
            className="clc__venue"
            src={clc_venue_logo}
            alt="clc auditorium logo"
          ></img>
        </div>
        <div className="left_side_block_footer">
          <Link to="/video" className="nav-link">
            Bharatanatyam Journey
          </Link>
          <p className="class-location-title">Follow us on:</p>
          <p className="class-location">
            Soorya Dance School <br />
            Address: 1948 Raymond Dr <br />
            Northbrook, IL 60062 <br />
            Phone: (224) 715-5846
          </p>
          <div>
            <div className="social">
              <a
                href="https://www.facebook.com/sooryadanceschool"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  width="32"
                  viewBox="0 0 320 512"
                  fill="#1877F2"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91V127.89c0-25.35 12.42-50.06 52.24-50.06H293V6.26S273.57 0 256.36 0c-73.22 0-121.06 44.38-121.06 124.72v70.62H89.33V288h46V512h92.66V288z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@sooryadanceschool3866" // Replace with your actual channel URL
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-link"
              >
                <img src={youtubelogo} alt="YouTube" width="30" height="30" />
              </a>
              <a
                href="https://www.instagram.com/jinoovarghese?igsh=MWV2cDdsY3Vmd3RobQ==" // Replace with your actual channel URL
                target="_blank"
                rel="noopener noreferrer"
                className="insta-link"
              >
                <img src={insta} alt="Instagram" width="40" height="40" />
              </a>
            </div>
            <div className="soorya_auditorium">
              <img
                className="soorya_studio"
                src={soorya_studio}
                alt="studio location"
              ></img>
              <img
                className="auditorium__footer"
                src={JLC_thumbnail}
                alt="JLC location"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
