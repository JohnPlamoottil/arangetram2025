import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./venue.css";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import Footer from "../../footer/footer";
import June2025 from "../../../assets/June2025.jpg";
import venue from "../../../assets/venue.png";
import frameImage from "../../../assets/macbookpro.png";
import tillana_venue from "../../../assets/tillana_venue.png";
import trio from "../../../assets/trio.png";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const Venue = () => {
  React.useEffect(() => {
    // Handle clicks outside of accordion
    function handleOutsideClick(e) {
      // Only close if click is outside any accordion or panels
      if (
        !e.target.closest(".accordion") &&
        !e.target.closest(".panel") &&
        !e.target.closest(".map__panel")
      ) {
        const allPanels = document.querySelectorAll(".panel, .map__panel");
        const allButtons = document.querySelectorAll(".accordion");

        // Close all panels and remove slide class
        allPanels.forEach((panel) => (panel.style.maxHeight = null));
        allButtons.forEach((button) => button.classList.remove("slide"));
      }
    }

    // Add click listener to document
    document.addEventListener("click", handleOutsideClick);

    // Cleanup on unmount
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Setup YT player for campus iframe to control background audio
  React.useEffect(() => {
    function setupVenuePlayer() {
      if (!(window.YT && window.YT.Player)) return;
      const player = new window.YT.Player("venue-yt", {
        events: {
          onStateChange: (e) => {
            const controller = window.BackgroundAudioController;
            if (!controller) return;
            if (e.data === window.YT.PlayerState.PLAYING) controller.pause();
            else if (
              e.data === window.YT.PlayerState.PAUSED ||
              e.data === window.YT.PlayerState.ENDED
            )
              controller.play();
          },
        },
      });
      return () => {
        try {
          player && player.destroy && player.destroy();
        } catch {
          /* ignore */
        }
      };
    }

    if (window.YT && window.YT.Player) setupVenuePlayer();
    else window.onYouTubeIframeAPIReady = setupVenuePlayer;
  }, []);

  function handleClick(e) {
    e.stopPropagation(); // Prevent outside click handler from firing

    const button = e.currentTarget;
    const isOpen = button.classList.contains("slide");

    // Close all other panels first
    const allPanels = document.querySelectorAll(".panel, .map__panel");
    const allButtons = document.querySelectorAll(".accordion");

    allPanels.forEach((panel) => (panel.style.maxHeight = null));
    allButtons.forEach((btn) => btn.classList.remove("slide"));

    // If this panel wasn't open, open it
    if (!isOpen) {
      const panel = button.nextElementSibling;
      button.classList.add("slide");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <div className="venue_content">
      <Navigation />
      <section className="questions">
        <h2 className="title_FAQ">Venue (Date & Location)</h2>
        <div>
          <img
            className="tillana_group"
            src={tillana_venue}
            alt="group center"
          />
        </div>
        <button className="accordion" onClick={handleClick}>
          Save the Date
        </button>
        <div className="panel">
          <p>
            Date: Saturday, June 21st 2025 <br />
            Time: 4:00pm to 8:00pm CST (Doors open promptly at 3:30pm CST)
            <br />
            RSVP: please submit before Friday June20 2025 or call your respected
            party.
            <img
              className="calendar"
              src={June2025}
              alt="calendar June2025"
            ></img>
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Location
        </button>
        <div className="panel">
          <p className="venue__text">
            James Lumber Center for the Performing Arts <br />
            Performing Arts Theater in Grayslake, Illinois <br />
            College of Lake County Grayslake Campus <br />
            Address: 19351 W Washington St <br /> Grayslake, IL 60030 <br />
            Phone: (847) 543-2300
            <img className="auditorium__venue" src={venue} alt="auditorium" />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Venue - A Brief History
        </button>
        <div className="panel">
          <p>
            The James Lumber Center is a multi-functional, premier performing
            arts venue, committed to the principles of access, inclusion,
            diversity and equity in our center partnerships, department
            staffing, facility scheduling, artistic programming and
            presentational use.
          </p>
          <p>
            The Performing Arts Building was officially dedicated on March 8,
            1997. The first full season began in September 1997. Since then,
            thousands of patrons have attended events held in this beautiful
            facility.
          </p>
          <p>
            In August 2003, the Performing Arts Building was officially renamed
            the James Lumber Center for the Performing Arts, recognizing trustee
            James Lumber, who served on the College of Lake County board for
            over 35 years. The James Lumber Center for the Performing Arts is a
            project of the College of Lake County Foundation.
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Interactive Map
        </button>
        <div className="map__panel">
          <p className="map-instructions">
            Please click on the red marker to calculate your driving directions
            to the auditorium.
          </p>
          <div className="embedded_map">
            <APIProvider apiKey={apiKey}>
              <Map
                style={{ width: "100%", height: "100%" }}
                zoom={15}
                center={{ lat: 42.354492334658644, lng: -88.01122761349113 }}
                mapId="2f2b36b07486a7e7bcc92e16"
              >
                <AdvancedMarker
                  position={{
                    lat: 42.354492334658644,
                    lng: -88.01122761349113,
                  }}
                />
              </Map>
            </APIProvider>
          </div>
        </div>
        <button className="accordion" onClick={handleClick}>
          Campus Parking
        </button>
        <div className="panel">
          <p>
            The following clips were taken from iPhone15 Pro and karuisrc K610
            GPS Drone with Cameras 4K HD on June12,13,14.
          </p>
          <div className="video-wrapper__venue">
            <img src={frameImage} alt="Frame" className="video-frame_venue" />

            <iframe
              id="venue-yt"
              src="https://www.youtube.com/embed/9MvIhi4PLPo?si=Aw-tHk9SDCkkPj9R&enablejsapi=1&modestbranding=1&rel=0"
              title="Direction to Venue"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="campus__parking"
            ></iframe>
          </div>
        </div>
      </section>
      <img className="trio" src={trio} alt="amarya rose jenna"></img>
      <Navigation />
      <Footer />
    </div>
  );
};

export default Venue;
