import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./gallery.css";
import Footer from "../../footer/footer";
import ComingSoon from "../../coming_soon/coming_soon";

const Gallery = () => {
  function handleClick(e) {
    const button = e.target;
    button.classList.toggle("slide");
    const panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  const galleryContent = (
    <div>
      <Navigation />

      <section className="questions">
        <h2 className="title_FAQ">Photo Album</h2>
        <button className="accordion" onClick={handleClick}>
          Sols: Michelle, Andrea, Jana
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
            <img className="musician" alt="deepu vocalist" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Varnum
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
            <a
              href="https://www.instagram.com/kiran_r_pai/?hl=en"
              target="Kirans Social"
              rel="noopener no referrer"
            >
              {" "}
              @kiran_r_pai
            </a>{" "}
            <br />
            <img className="musician" alt="deepu vocalist" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            .. <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Solos: Rose, Jenna, Amarya
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
            <img className="musician" alt="deepu vocalist" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Thillana
        </button>
        <div className="panel">
          <p className="accordion-text">
            Biography of Preyesh Mampoyil Kudiru Parambu
            <br />
            <img className="musician" alt="deepu vocalist" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            ..
            <br />
          </p>
        </div>
      </section>
      <div className="musician_container">
        <h1 className="title_orchestra">The History of Dance in India</h1>
        <div className="center-image">
          <img className="india__map" />
        </div>
        <p className="accordion-text">
          <strong>
            {" "}
            . <br />
            <br />
            . <br />
            <br />
            . <br />
            <br />
            .. <br />
            <br />
            ..
          </strong>
        </p>
      </div>
      <Navigation />
      <Footer />
    </div>
  );
  return <ComingSoon message="Gallery">{galleryContent}</ComingSoon>;
};

export default Gallery;
