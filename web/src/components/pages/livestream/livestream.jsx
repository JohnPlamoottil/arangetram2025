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
        <div className="outer_graduation_video2025">
          <iframe
            src="https://www.youtube.com/embed/5iR0UQ6hRo4?si=IIQ6B8OVTTy42hRh"
            title="Bharatanatyam Arangetram - Amarya, Rose, Jana, Andrea, Jenna, & Michele"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="graduation_video2025"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Livestream;
