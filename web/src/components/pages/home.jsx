import "./Home.css";
import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
// import Video from "./video"; went to main.jsx
import temporary_grp_photo from "../../assets/group.png";

import "../../vendor/fonts.css";

import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>
        <Header />
        <main className="journey">
          {/* <Link href="/video" className="nav-link">
            Bharatanatyam Journey 2018 to 2025 (First Competition Video)
          </Link> */}
        </main>
      </div>
      {/* Dropdown Icon */}
      <button
        className="dropdown"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      {menuOpen && (
        <div className="dancers">
          {/* <div className="dancer_text">Andrea</div> */}
          <a href="/andrea" className="dancer_text">
            Andrea
          </a>
          {/* <div className="dancer_text">Jana</div> */}
          <a href="/jana" className="dancer_text">
            Jana
          </a>
          {/* <div className="dancer_text">Michelle</div> */}
          <a href="/michelle" className="dancer_text">
            Michelle
          </a>
          {/* <div className="dancer_text">Rose</div> */}
          <a href="/rose" className="dancer_text">
            Rose
          </a>
          {/* <div className="dancer_text">Jenna</div> */}
          <a href="/jenna" className="dancer_text">
            Jenna
          </a>
          {/* <div className="dancer_text">Amarya</div> */}
          <a href="/amarya" className="dancer_text">
            Amarya
          </a>
        </div>
      )}

      {/* <h1 className="performers">
        Andrea Thomas, Jana Scaria, Michelle Eapen,
      </h1> */}
      <img
        className="group_photo"
        src={temporary_grp_photo}
        alt="group photo"
      ></img>
      {/* <h1 className="performers">
        Rose Thomas, Jenna Plamoottil, & Amarya Koola
      </h1> */}
      {/* <img src={temporary_grp_photo} alt="group photo" /> */}
      <div className="card">
        <button></button>
        <Footer />
      </div>
      <p className="read-the-docs"></p>

      <div>
        <Link to="/video" className="nav-link">
          Bharatanatyam Journey 2018 to 2025 (First Competition Video)
        </Link>
      </div>
    </>
  );
}

export default Home;
