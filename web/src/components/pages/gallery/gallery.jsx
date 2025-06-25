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
  // const galleryContent = (
  async function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:8080/api/upload", {
        method: "POST",

        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Image uploaded successfully!");
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Upload error:", error);

      alert("Failed to upload image.");
    }
  }
  return (
    <div>
      <Navigation />
      <section className="questions">
        <h2 className="title_FAQ">Photo Album</h2>
        <button className="accordion" onClick={handleClick}>
          Lobby Decorations
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <button className="accordion" onClick={handleClick}>
          Auditorium (Audience Clips)
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <button className="accordion" onClick={handleClick}>
          Pushpanjali
        </button>
        <div className="panel">
          <p className="accordion-text"></p>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <button className="accordion" onClick={handleClick}>
          Solos: Michelle, Andrea, Jana
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
            <img className="musician" alt="first 3 solos" />
          </p>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <button className="accordion" onClick={handleClick}>
          Varnum
        </button>
        <div className="panel">
          <p className="accordion-text"></p>
          <input type="file" onChange={handleImageUpload} />
        </div>

        <button className="accordion" onClick={handleClick}>
          Solos: Rose, Jenna, Amarya
        </button>
        <div className="panel">
          <p className="accordion-text"></p>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <button className="accordion" onClick={handleClick}>
          Thillana
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <button className="accordion" onClick={handleClick}>
          Reception Photos
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
          <input type="file" onChange={handleImageUpload} />
        </div>
      </section>
      <div className="musician_container">
        <h1 className="title_orchestra">Video Clips</h1>
        <button className="accordion" onClick={handleClick}>
          Cumulation of Speeches
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Pushpanjali Video Clip
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Solo #1, #2, #3 Videoclip
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Varnum Videoclip
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Solo #4, #5, #6 Videoclip
        </button>
        <div className="panel">
          <p className="accordion-text"></p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Thillana Videoclip
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Gift & Award Recognition Videoclip
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Vote of Thanks Videoclip
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
        </div>
        <p className="accordion-text"></p>
      </div>
      <Navigation />
      <Footer />
    </div>
  );
  // return <ComingSoon message="Gallery">{galleryContent}</ComingSoon>;
};

export default Gallery;
