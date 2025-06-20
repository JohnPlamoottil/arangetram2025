import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./faq-form.css";

const FAQForm = () => {
  const [formData, setFormData] = useState({
    question: "",
    name: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2q25r7f",
        "template_k169vpp",
        formData,
        "16lkLTGP8jiCXyrHM"
      )
      .then(() => {
        setStatus("✅ Thank you! Your question was submitted.");
        setFormData({ question: "", name: "", email: "" });
      })
      .catch(() => {
        setStatus("❌ Submission failed. Please try again.");
      });
  };

  return (
    <div className="faq-form">
      <p className="faq-instructions">
        If you have any more questions concerning the event, please send them
        using the form below:
      </p>
      <p className="faq-instructions">
        We’ll email you back shortly with the answer and update the site
        shortly.
      </p>

      {status && <p className="form-status">{status}</p>}

      <form onSubmit={handleSubmit}>
        <label className="form_question">
          Question*
          <br />
          <textarea
            className="faq-textarea"
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          />
        </label>

        <div className="contact">
          <label className="form_name">
            Name*
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form_email">
            Email*
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button className="form_submit" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default FAQForm;
