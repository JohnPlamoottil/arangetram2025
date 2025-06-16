import React from "react";
import "./video.css"; // optional for styling
import Navigation from "../../navigation-links/navigation-links";
import frameImage from "../../../assets/macbookpro.png";

const Video = () => {
  return (
    <div
      className="video-page"
      style={{ textAlign: "center", padding: "2rem" }}
    >
      <Navigation />
      <h1 className="video-title">Our First Competition</h1>
      <h2 className="video-subtitle">Kalashetra Competition 2019</h2>
      <div className="video-overlay"></div>

      <div className="video-wrapper__video">
        <img src={frameImage} alt="Frame" className="video-frame_video" />
        <iframe
          src="https://www.youtube.com/embed/btN6NSrr9H4"
          title="Bharatanatyam 2019"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="competition_video2019"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
