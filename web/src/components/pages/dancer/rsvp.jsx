import React, { useState } from "react";
import "./rsvp.css";
// import rsvp from "./rsvp.jsx";
function App() {
  const [showRSVP, setShowRSVP] = useState(false);

  return (
    <div>
      <button onClick={() => setShowRSVP(true)}>RSVP Now</button>
      <RSVP isOpen={showRSVP} onClose={() => setShowRSVP(false)} />
    </div>
  );
}

const RSVPModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="rsvp-overlay">
      <div className="rsvp-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="rsvp-title">RSVP for the Arangetram</h2>
        <form className="rsvp-form">
          <label>
            Name*
            <input type="text" name="name" required />
          </label>
          <label>
            Email*
            <input type="email" name="email" required />
          </label>
          <label>
            Number of Guests*
            <input type="number" name="guests" min="1" required />
          </label>
          <button type="submit" className="submit-btn">
            Confirm RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

// export default RSVPModal;
// export default App;
