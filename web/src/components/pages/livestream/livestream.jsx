import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./livestream.css";
import frameImage from "../../../assets/macbookpro.png";
import Footer from "../../footer/footer";

const Livestream = () => {
  return (
    <div className="video-page">
      <Navigation />
      <h1 className="video-title">Our Live Performance</h1>

      <div className="video-wrapper__livestream ">
        <img src={frameImage} alt="Frame" className="video-frame_livestream" />
        <iframe
          src="https://www.youtube.com/embed/BL1tvAUCR2A?si=e2e6u3TFYe3j0f3k"
          title="Dance Performance Dec9 2022 Jenna & Amarya +Boys"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="graduation_video2025"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Livestream;
