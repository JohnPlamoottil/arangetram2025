import React from "react";
import "./video.css"; // optional for styling
import Navigation from "../../navigation-links/navigation-links";
import frameImage from "../../../assets/macbookpro.png";
import ComingSoon from "../../coming_soon/coming_soon";

const Video = () => {
  // const videoContent = (
  return (
    <div
      className="video-page"
      style={{ textAlign: "center", padding: "2rem" }}
    >
      <Navigation />
      <h1 className="video-title">Dance Memories - Reflection ~2015-2025</h1>
      <h2 className="video-subtitle">Kalakshetra Competition 2019</h2>
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
          src="https://www.youtube.com/embed/-yZseWMFdKM?si=9j6NdfWQ0mwEA4l7"
          title="Reflection Video Arangetram"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="reflection"
        ></iframe>
      </div>
      <Navigation />
    </div>
  );
  // return <ComingSoon message="Reflection Videos">{videoContent}</ComingSoon>;
};

export default Video;

// // automatically makes the page available on Sat June21 6pm CST //
//   if (new Date() < new Date("2025-06-21 T18:00:00")) {
//     console.log(new Date());
//     return <ComingSoon message={"Video"} />;
//   } else {}
//     return ()
