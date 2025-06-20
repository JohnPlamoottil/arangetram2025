import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./rsvp.css";

export const RSVPModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Start spinner

    // Send to organizer
    emailjs
      .send(
        "service_avsd38s",
        "template_9iq69d6",
        formData,
        "16lkLTGP8jiCXyrHM"
      )
      .then(() => {
        setStatus("✅ Thank you! Your RSVP has been submitted.");
      })
      .catch(() => {
        setStatus("❌ Submission failed. Please try again.");
      })
      .finally(() => {
        setIsSending(false); // Stop spinner
      });

    // Send confirmation to guest
    emailjs
      .send(
        "service_avsd38s",
        "template_rsvp_guest",
        formData,
        "16lkLTGP8jiCXyrHM"
      )
      .then(() => {
        console.log("Confirmation email sent to guest.");
      })
      .catch(() => {
        console.log("Failed to send confirmation to guest.");
      });

    setFormData({ name: "", email: "", guests: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="rsvp-overlay">
      <div className="rsvp-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="rsvp-title">RSVP for the Arangetram</h2>

        {status && <p className="form-status">{status}</p>}

        <form className="rsvp-form" onSubmit={handleSubmit}>
          <label>
            Name*
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email*
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Number of Guests*
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              required
            />
          </label>
          {isSending ? (
            <p className="loading-message">Sending your RSVP...</p>
          ) : (
            <button type="submit" className="submit-btn">
              Confirm RSVP
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default RSVPModal;
