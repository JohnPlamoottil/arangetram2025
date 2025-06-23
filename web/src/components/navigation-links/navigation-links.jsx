import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navigation-links.css";

const Navigation = () => {
  const [menuOpen] = useState(false);
  return (
    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/program" className="nav-link">
        Repertoire
      </NavLink>

      <NavLink to="/instructor" className="nav-link">
        Guru
      </NavLink>

      <NavLink to="/orchestra" className="nav-link">
        Musicians
      </NavLink>

      <NavLink to="/venue" className="nav-link">
        Venue
      </NavLink>

      <NavLink to="/livestream" className="nav-link">
        Livestream
      </NavLink>

      <NavLink to="/faqs" className="nav-link">
        FAQs
      </NavLink>

      <NavLink to="/guestbook" className="nav-link">
        Guestbook
      </NavLink>

      <NavLink to="/gallery" className="nav-link">
        Gallery
      </NavLink>
    </nav>
  );
};

export default Navigation;

<Link
  to={{
    pathname: "/some/path",
    search: "?query=string",
    hash: "#hash",
  }}
/>;

{
  /* <a href="/" className="nav-link">
        Home
      // </a> 
      // a tags are basic HTML,instead use NavLinks bc its browser router efficient*/
}

/* is mobile ? this button will be seen on screen and nav links visible when not in mobile  */
/* {isMobile ?<button
        className="dropdown"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <p className="dropdown__title">Shishya</p>
        <span className="burger-icon">☰</span>
      </button> : */
/* : if not mobile*/
