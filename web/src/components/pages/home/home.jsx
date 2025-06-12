import "./Home.css";
import React, { useState } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import tillana from "../../../assets/tillana.png";
import Navigation from "../../navigation-links/navigation-links";
import "../../../vendor/fonts.css";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import dance_bkgd from "../../../assets/dance_bkgd.png";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>
        <img
          className="dance_bkgd"
          src={dance_bkgd}
          alt="tillana picture"
        ></img>

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
            Michelle Eapen
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=andrea",
            }}
          >
            Andrea Thomas
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=Jana",
            }}
          >
            Jana Scaria
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=Rose",
            }}
          >
            Rose Thomas
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=Jenna",
            }}
          >
            Jenna Plamoottil
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "dancer",
              search: "?dancer=Amarya",
            }}
          >
            Amarya Koola
          </Link>
        </div>
      )}
      <img className="group_photo" src={tillana} alt="group photo"></img>
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
        </p>
        <p className="quote-author-two">- Amelia Atwater Rhodes</p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
