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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_avsd38s",
        "template_nb9x01n",
        formData,
        "16lkLTGP8jiCXyrHM"
      )
      .then(() => {
        setStatus("✅ Thank you! Your RSVP has been submitted.");
        setFormData({ name: "", email: "", guests: "" });
      })
      .catch(() => {
        setStatus("❌ Submission failed. Please try again.");
      });
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
          <button type="submit" className="submit-btn">
            Confirm RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVPModal;
