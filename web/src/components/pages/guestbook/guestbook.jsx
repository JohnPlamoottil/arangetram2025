import React from "react";
import { useState } from "react";
import "./guestbook.css"; // optional for styling
import Navigation from "../../navigation-links/navigation-links";
import Footer from "../../footer/footer";
import group_center from "../../../assets/group_center.png";
import "../../../vendor/fonts.css";

function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { name, message, date: new Date().toLocaleString() };
    setEntries([newEntry, ...entries]); // prepend new entry
    setName("");
    setMessage("");
  };

  return (
    <div>
      <Navigation />
      <h2 className="guestbook">Guestbook</h2>
      <img className="group_photo" src={group_center} alt="group center"></img>

      <div className="guestbook">
        <h2>Guestbook</h2>
        <form className="guestbook" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Leave a Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        <ul className="entries">
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.name}</strong> ({entry.date})<p>{entry.message}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
export default Guestbook;
