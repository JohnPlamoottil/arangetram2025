import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./coming_soon.css";
import Navigation from "../navigation-links/navigation-links";

const ComingSoon = ({ message, targetDate, children }) => {
  const calculateTimeLeft = () => {
    // Fixed launch date: July 1, 2025 at 3:00 PM CST (which is 8:00 PM UTC)
    const targetDate = new Date("2025-07-01T20:00:00Z"); // UTC time

    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null; // countdown ended
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // If timer has reached zero and children are provided, render the actual content
  if (!timeLeft && children) {
    return children;
  }

  return (
    <div className="coming-soon-container">
      <Navigation />
      <div className="title_unavail">
        <h1>
          🚧
          <br />
          Photo Page Unavailable <br />
          🚧{" "}
        </h1>
      </div>
      <p className="subtitle">
        This page will be available on .... <br />
        {targetDate
          ? new Date(targetDate).toLocaleDateString()
          : "July 1st at 3:00 PM CST"}
        <br />
        {message || ""}
      </p>

      {timeLeft ? (
        <div className="countdown">
          <h2>Launching In:</h2>
          <div className="timer">
            <span>{timeLeft.days}d </span>
            <span>{timeLeft.hours}h </span>
            <span>{timeLeft.minutes}m </span>
            <span>{timeLeft.seconds}s</span>
          </div>
        </div>
      ) : (
        <p>🎉 The page is now available!</p>
      )}

      <Link to="/" className="home-button">
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;

// const targetDate = "2025-06-21 T14:00:00";
// const difference = +new Date(targetDate) - new Date();
