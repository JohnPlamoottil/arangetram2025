import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./dancer.css"; // optional for styling
import Guestbook from "../guestbook/guestbook.jsx";
import { RSVPModal } from "./rsvp";
import { Link } from "react-router-dom";
import Navigation from "../../navigation-links/navigation-links";
import { DANCERS } from "../../../constants.js";
import Footer from "../../footer/footer.jsx";

const Dancer = () => {
  const [searchParams] = useSearchParams();

  const dancerName = searchParams.get("dancer").toLowerCase();

  const dancerInfo = DANCERS[dancerName];
  console.log(DANCERS[dancerName]);

  React.useEffect(() => {
    function handleOutsideClick(e) {
      if (!e.target.closest(".accordion") && !e.target.closest(".panel")) {
        const allPanels = document.querySelectorAll(".panel");
        const allButtons = document.querySelectorAll(".accordion");
        allPanels.forEach((panel) => (panel.style.maxHeight = null));
        allButtons.forEach((button) => button.classList.remove("slide"));
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  function handleClick(e) {
    e.stopPropagation();
    const button = e.currentTarget;
    const isOpen = button.classList.contains("slide");

    const allPanels = document.querySelectorAll(".panel");
    const allButtons = document.querySelectorAll(".accordion");
    allPanels.forEach((panel) => (panel.style.maxHeight = null));
    allButtons.forEach((btn) => btn.classList.remove("slide"));

    if (!isOpen) {
      const panel = button.nextElementSibling;
      button.classList.add("slide");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  const [showRSVP, setShowRSVP] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navigation />
      <section className="main_title_bar">
        <h2 className="title_dancer">{dancerInfo.fullName}</h2>
        <div className="outer_fullpose">
          <img
            className={`full_pose full_pose_${dancerName}`}
            src={dancerInfo.fullPose}
            alt="Full Length Pose"
          ></img>
        </div>
        <button className="accordion" onClick={handleClick}>
          Shishya (Autobiography on {dancerInfo.shortName})
        </button>
        <div className="panel">
          <div className="autobio-panel">
            <div className="autobio-photo">
              <img
                className={`headshot headshot_${dancerName}`}
                src={dancerInfo.headshot}
                alt="headshot"
              />
            </div>
            <div className="autobio-text">
              <p>{dancerInfo.autobio}</p>
            </div>
          </div>
        </div>
        <button className="accordion" onClick={handleClick}>
          Shishya (Biography from Parents)
        </button>
        <div className="panel">
          <div className="shishya-panel">
            <div className="shishya-photo">
              <img
                className={`mother_daughter mom_daughter_${dancerName}`}
                src={dancerInfo.mother_daughter}
                alt={`Mom and ${dancerInfo.shortName}`}
              />
            </div>
            <div className="shishya-text">{dancerInfo.shishya}</div>
          </div>
        </div>
        <button className="accordion" onClick={handleClick}>
          Solo Performance
        </button>
        <div className="panel">
          <div className="solo-panel">
            <div className="solo-text">
              <p>{dancerInfo.dance_title}</p>
              <p>{dancerInfo.solo_duration}</p>
              <p>{dancerInfo.solo}</p>
            </div>
            <div className="solo-photo">
              <img src={dancerInfo.solo_photo} alt="solo_photo" />
            </div>
          </div>
        </div>
        <button className="accordion" onClick={handleClick}>
          Invitation Card
        </button>
        <div className="panel">
          <p>
            <img
              className={`invite_card invite_card_${dancerInfo.shortName}`}
              src={dancerInfo.invite}
              alt="invitation"
            />
            <br />
            Dinner to Follow After the Performance
          </p>
        </div>
        <button className="accordion" onClick={() => setShowRSVP(true)}>
          RSVP
        </button>
        <button
          className="dropdown"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <p className="dropdown__title">Shishya</p>
          <span className="burger-icon">☰</span>
        </button>
        {menuOpen && (
          <div className="dancers" onClick={() => setMenuOpen(false)}>
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
        <div className="panel">
          <RSVPModal isOpen={showRSVP} onClose={() => setShowRSVP(false)} />
          <p>RSVP</p>
          <Link to="/guestbook">Shishya</Link>
        </div>
        <img
          className="varnum_pose"
          src={dancerInfo.varnum}
          alt="sitting pose"
        ></img>
        <Guestbook dancerName={dancerName} fullName={dancerInfo.fullName} />
      </section>
      <Navigation />
      <Footer />
    </div>
  );
};

export default Dancer;
