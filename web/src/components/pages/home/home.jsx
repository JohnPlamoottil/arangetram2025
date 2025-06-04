import "./Home.css";
import React, { useState } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
// import Video from "./video"; went to main.jsx
import temporary_grp_photo from "../../../assets/group.png";
import Navigation from "../../navigation-links/navigation-links";
import "../../../vendor/fonts.css";

import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>
        <Header />
        <main className="journey"></main>
      </div>
      <Navigation />;{/* Dropdown Icon */}
      <button
        className="dropdown"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      {menuOpen && (
        <div className="dancers">
          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=Michelle",
            }}
          >
            Michelle
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=andrea",
            }}
          >
            Andrea
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=Jana",
            }}
          >
            Jana
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=Rose",
            }}
          >
            Rose
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=Jenna",
            }}
          >
            Jenna
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=Amarya",
            }}
          >
            Amarya
          </Link>
        </div>
      )}
      <img
        className="group_photo"
        src={temporary_grp_photo}
        alt="group photo"
      ></img>
      <div className="quote-container">
        <blockquote className="quote">
          ” Yatho Hasta Thatho Drishti, Yatho Drishti “
        </blockquote>
        <p className="quote-meaning">
          "Where the hands(hasta) are, go the eyes (drishti); where the eyes
          are, goes the mind (manah); where the mind goes, there is an
          expression of inner feeling (bhava) and where there is bhava, mood or
          sentiment (rasa) is evoked”
        </p>
        <p className="quote-author-one">- Natya Shastra</p>
        <p className="quotetwo">
          “In a society that worships love, freedom and beauty, dance is sacred.
          It is a prayer for the future, a remembrance of the past and a joyful
          exclamation of thanks for the present.”
          <p className="quote-author-two">- Amelia Atwater Rhodes</p>
        </p>
      </div>
      <Footer />
      <div>
        <Link to="/video" className="nav-link">
          Bharatanatyam Journey 2018 to 2025 (First Competition Video)
        </Link>
      </div>
    </>
  );
}

export default Home;
