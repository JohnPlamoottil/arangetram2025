import React, { useState } from "react";

const Navigation = () => {
  const [menuOpen] = useState(false);
  return (
    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
      <a href="/" className="nav-link">
        Home
      </a>
      <a href="/program" className="nav-link">
        Repertoire (Program)
      </a>
      <a href="/instructor" className="nav-link">
        Guru (Instructor)
      </a>
      <a href="/orchestra" className="nav-link">
        Musicians (Orchestra)
      </a>
      <a href="/venue" className="nav-link">
        Venue (Date & Location)
      </a>
      <a href="/livestream" className="nav-link">
        Watch Livestream
      </a>
      <a href="/faqs" className="nav-link">
        Frequently Asked Q?s FAQs
      </a>
    </nav>
  );
};

export default Navigation;
