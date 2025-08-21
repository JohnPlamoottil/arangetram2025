import "./home.css";
import { useState } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import green_varnum_corner from "../../../assets/green_varnum_corner.png";
import Navigation from "../../navigation-links/navigation-links";
import "../../../vendor/fonts.css";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import dance_bkgd from "../../../assets/dance_bkgd.png";
import qr_code from "../../../assets/qr_code.png";
import qr_code_two from "../../../assets/qr_code_two.jpg";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div>
        <div className="dance_bkgd_outer_box">
          <img
            className="dance_bkgd"
            src={dance_bkgd}
            alt="white bkgd with 4 shadow dancers"
          ></img>
        </div>

        <Header />
        <main className="journey"></main>
      </div>
      <Navigation />;{/* Dropdown Icon */}
      <button
        className="dropdown"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <p className="dropdown__title">Shishya</p>
        <span className="burger-icon">☰</span>
      </button>
      {menuOpen && (
        <div className="dancers">
          <Link
            className="dancer_text"
            to={{
              pathname: "/dancer",
              search: "?dancer=michelle",
            }}
          >
            Michelle Eapen
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "/dancer",
              search: "?dancer=andrea",
            }}
          >
            Andrea Thomas
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "/dancer",
              search: "?dancer=jana",
            }}
          >
            Jana Scaria
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "/dancer",
              search: "?dancer=rose",
            }}
          >
            Rose Thomas
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "/dancer",
              search: "?dancer=jenna",
            }}
          >
            Jenna Plamoottil
          </Link>

          <Link
            className="dancer_text"
            to={{
              pathname: "/dancer",
              search: "?dancer=amarya",
            }}
          >
            Amarya Koola
          </Link>
        </div>
      )}
      <div className="slanted_green_image">
        <img
          className="home_group_photo"
          src={green_varnum_corner}
          alt="group photo"
        ></img>
      </div>
      <div className="quote-container">
        <blockquote className="quote">
          “Yatho Hasta Thatho Drishti; <br />
          Yatho Drishti Thatho Manah. <br />
          Yatho Manah Thatho Bhaava & <br />
          Yatho Bhaava Thatho Rasa.” <br />
        </blockquote>
        <p className="quote-meaning">
          "Where the hands(hasta) are, go the eyes (drishti); <br />
          Where the eyes are, goes the mind (manah). <br />
          Where the mind goes, there is an expression of inner feeling (bhava) &
          <br />
          Where there is bhava, mood or sentiment (rasa) is evoked”
          <br />
        </p>
        <p className="quote-author-one">- Natya Shastra</p>
        <p className="quotetwo">
          “In a society that worships love, freedom and beauty, dance is sacred.
          It is a prayer for the future, a remembrance of the past and a joyful
          exclamation of thanks for the present.”
        </p>
        <p className="quote-author-two">- Amelia Atwater Rhodes</p>
      </div>
      <div className="QR_code_outer">
        <div>
          <p className="QR_code_description">
            Expired QR Code on the Brochures{" "}
          </p>
          <img className="QR_code" src={qr_code} alt="qr code"></img>
          <p className="QR_code_description">
            Reactivated QR Code - Share this website with others around you
          </p>
          <img className="QR_code" src={qr_code_two} alt="qr code"></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
