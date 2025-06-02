import "./App.css";
import React, { useState } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Video from "./video";

import "../vendor/fonts.css";

import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
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
          <div className="dancer_text">Andrea</div>
          <div className="dancer_text">Jana</div>
          <div className="dancer_text">Michelle</div>
          <div className="dancer_text">Rose</div>
          <div className="dancer_text">Jenna</div>
          <div className="dancer_text">Amarya</div>
        </div>
      )}
      <h1 className="performers">
        Andrea Thomas, Jana Scaria, Michelle Eapen,
      </h1>
      <img src="../web/src/assets/group.png" alt="group photo"></img>
      <h1 className="performers">
        Rose Thomas, Jenna Plamoottil, & Amarya Koola
      </h1>
      <img src="../assets/group.png" alt="group photo" />
      <div className="card">
        <button></button>
        <Footer />
      </div>
      <p className="read-the-docs"></p>
      <Router>
        <Routes>
          {/* Other routes */}
          <Route
            path="/"
            element={
              <div>
                <Link to="/video" className="nav-link">
                  Bharatanatyam Journey 2018 to 2025 (First Competition Video)
                </Link>
              </div>
            }
          />
          <Route path="/video" element={<Video />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
