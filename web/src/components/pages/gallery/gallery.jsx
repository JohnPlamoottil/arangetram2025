import React, { useState, useEffect } from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./gallery.css";
import Footer from "../../footer/footer";
import ComingSoon from "../../coming_soon/coming_soon";

const Gallery = () => {
  const [images, setImages] = useState([]);

  /**
   * Fetch the list of images from the API and store in state.
   */
  const loadImages = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/images");
      const data = await res.json();
      if (res.ok) {
        setImages(data.images);
      } else {
        console.error("Failed to load images:", data.error);
      }
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  // Load images once when the component mounts
  useEffect(() => {
    loadImages();
  }, []);

  /**
   * Accordion open / close handler
   */
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

  /**
   * Upload a single image to the backend and refresh the list on success.
   */
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
        loadImages(); // refresh gallery
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

        {/* Lobby */}
        <button className="accordion" onClick={handleClick}>
          Lobby Decorations
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
          <input type="file" onChange={handleImageUpload} />
        </div>

        {/* Auditorium */}
        <button className="accordion" onClick={handleClick}>
          Auditorium (Audience Clips)
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>

          {/* Display images here */}
          <div className="gallery-grid">
            {images.map((img) => (
              <img
                key={img.imageBase64.slice(0, 20)}
                src={`data:${img.contentType};base64,${img.imageBase64}`}
                alt={img.name}
                className="gallery-img"
              />
            ))}
          </div>

          <input type="file" onChange={handleImageUpload} />
        </div>

        {/* Pushpanjali */}
        <button className="accordion" onClick={handleClick}>
          Pushpanjali
        </button>
        <div className="panel">
          <p className="accordion-text"></p>
          <input type="file" onChange={handleImageUpload} />
        </div>

        {/* Solos 1 */}
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

        {/* Varnum */}
        <button className="accordion" onClick={handleClick}>
          Varnum
        </button>
        <div className="panel">
          <p className="accordion-text"></p>
          <input type="file" onChange={handleImageUpload} />
        </div>

        {/* Solos 2 */}
        <button className="accordion" onClick={handleClick}>
          Solos: Rose, Jenna, Amarya
        </button>
        <div className="panel">
          <p className="accordion-text"></p>
          <input type="file" onChange={handleImageUpload} />
        </div>

        {/* Thillana */}
        <button className="accordion" onClick={handleClick}>
          Thillana
        </button>
        <div className="panel">
          <p className="accordion-text">
            <br />
          </p>
          <input type="file" onChange={handleImageUpload} />
        </div>

        {/* Reception */}
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

      {/* Video Clips */}
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
  // If you want to show a coming soon placeholder instead, wrap like below:
  // return <ComingSoon message="Gallery">{galleryContent}</ComingSoon>;
};

export default Gallery;
