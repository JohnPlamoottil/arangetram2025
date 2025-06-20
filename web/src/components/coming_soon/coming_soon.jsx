import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./coming_soon.css";
import Navigation from "../navigation-links/navigation-links";

const ComingSoon = ({ message }) => {
  const calculateTimeLeft = () => {
    const targetDate = "2025-06-21T00:14:00";
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-soon-container">
      <Navigation />
      <div className="title_unavail">
        <h1>
          Page Unavailable <br />
          🚧 🚧{" "}
        </h1>
      </div>
      <p className="subtitle">
        This page will be available on .... <br />
        Saturday June21 2025 2pm
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
