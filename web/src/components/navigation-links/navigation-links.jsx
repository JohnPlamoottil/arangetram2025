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
        Repertoire (Program)
      </NavLink>

      <NavLink to="/instructor" className="nav-link">
        Guru (Instructor)
      </NavLink>

      <NavLink to="/orchestra" className="nav-link">
        Musicians (Orchestra)
      </NavLink>

      <NavLink to="/venue" className="nav-link">
        Venue (Date & Location)
      </NavLink>

      <NavLink to="/livestream" className="nav-link">
        Watch Livestream
      </NavLink>

      <NavLink to="/faqs" className="nav-link">
        Frequently Asked Q?s FAQs
      </NavLink>

      <NavLink to="/guestbook" className="nav-link">
        Guestbook
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
