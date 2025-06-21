import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./coming_soon.css";
import Navigation from "../navigation-links/navigation-links";

const ComingSoon = ({ message, targetDate, children }) => {
  const calculateTimeLeft = () => {
    // if targetDate is provided, use it; otherwise calculate tmrw at 2:00 pm CST //
    let targetDateTime;

    if (targetDate) {
      targetDateTime = new Date(targetDate);
    } else {
      //Calculate today at 2pm CST
      const today = new Date();
      today.setDate(today.getDate() + 0);

      // Create a date string for today at 2pmCST
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const cstDateString = `${year}-${month}-${day}T14:00:00-06:00`; // 2:00 PM CST

      targetDateTime = new Date(cstDateString);
    }
    const difference = +targetDateTime - +new Date();
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
          Page Unavailable <br />
          🚧 🚧{" "}
        </h1>
      </div>
      <p className="subtitle">
        This page will be available on .... <br />
        {targetDate
          ? new Date(targetDate).toLocaleDateString()
          : "Today at 2:00 PM CST"}
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
