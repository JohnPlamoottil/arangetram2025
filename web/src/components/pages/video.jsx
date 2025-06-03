import React from "react";
import "./video.css"; // optional for styling
// import video from "../../assets/bharatanatyam_2019.mp4";

const Video = () => {
  return (
    <div className="video-page">
      <h1 className="video-title">Our First Competition</h1>
      <div className="overlay"></div>

      <video className="video-player" controls width="100%" height="auto">
        {/* <source src={video} type="video.mp4" /> */}
        Kalashetra Competition 2019
      </video>
    </div>
  );
};

export default Video;
