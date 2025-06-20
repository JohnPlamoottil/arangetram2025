import React from "react";
import "./video.css"; // optional for styling
import Navigation from "../../navigation-links/navigation-links";
import frameImage from "../../../assets/macbookpro.png";
import ComingSoon from "../../coming_soon/coming_soon";

const Video = () => {
  // automatically makes the page available on Sat June21 2pm CST //
  if (new Date() < new Date("2025-06-21T00:14:00")) {
    return <ComingSoon message={"Video"} />;
  } else {
    return (
      <div
        className="video-page"
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <Navigation />
        <h1 className="video-title">Dance Memories - Reflection ~2015-2025</h1>
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
        <h2 className="video-subtitle">Memorable Reflection Video</h2>
        <div className="video-overlay"></div>

        <div className="video-wrapper__video">
          <img src={frameImage} alt="Frame" className="video-frame_video" />
          <iframe
            src="https://www.youtube.com/embed/btN6NSrr9H4"
            title="Bharatanatyam 2019"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="reflection"
          ></iframe>
        </div>
        <Navigation />
      </div>
    );
  }
};

export default Video;
