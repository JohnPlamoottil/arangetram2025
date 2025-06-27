import React, { useState, useEffect } from "react";
import Navigation from "../../navigation-links/navigation-links";
import Footer from "../../footer/footer";
import "./gallery.css";

const PHOTO_SECTIONS = [
  { key: "lobby", label: "Lobby Decorations" },
  {
    key: "auditorium",
    label: "Auditorium (Audience Clips)",
    showGallery: true,
  },
  { key: "pushpanjali", label: "Pushpanjali" },
  { key: "solos1", label: "Solos: Michelle, Andrea, Jana" },
  { key: "varnum", label: "Varnum" },
  { key: "solos2", label: "Solos: Rose, Jenna, Amarya" },
  { key: "thillana", label: "Thillana" },
  { key: "reception", label: "Reception Photos" },
];

const VIDEO_SECTIONS = [
  { key: "speeches", label: "Cumulation of Speeches" },
  { key: "pushpanjali", label: "Pushpanjali Video Clip" },
  { key: "solos", label: "Solo #1, #2, #3 Videoclip" },
  { key: "varnum", label: "Varnum Videoclip" },
  { key: "solos2", label: "Solo #4, #5, #6 Videoclip" },
  { key: "thillana", label: "Thillana Videoclip" },
  { key: "awards", label: "Gift & Award Recognition Videoclip" },
  { key: "thanks", label: "Vote of Thanks Videoclip" },
];

const AccordionSection = ({ label, children, onClick }) => (
  <>
    <button className="accordion" onClick={onClick}>
      {label}
    </button>
    <div className="panel">{children}</div>
  </>
);

const Gallery = () => {
  const [imagesByCategory, setImagesByCategory] = useState({});

  // Fetch images and organize by category
  const loadImages = async () => {
    try {
      console.log("Fetching images...");
      const res = await fetch("http://localhost:8080/api/images");
      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok && data.images) {
        console.log("Number of images received:", data.images.length);

        // Group images by category
        const categorizedImages = data.images.reduce((acc, img) => {
          const category = img.category || "uncategorized";
          console.log(`Image category: ${category}`, img);
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(img);
          return acc;
        }, {});

        console.log("Categorized images:", categorizedImages);
        setImagesByCategory(categorizedImages);
      } else {
        console.error("Failed to load images:", data.error || "Unknown error");
      }
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  // Accordion toggle
  const handleAccordionClick = (e) => {
    const btn = e.target;
    btn.classList.toggle("slide");
    const panel = btn.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : panel.scrollHeight + "px";
  };

  // Image upload handler with category
  const handleImageUpload = async (e, category) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("category", category);

    try {
      const res = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        body: formData,
      });
      const { error } = await res.json();
      if (res.ok) {
        alert("Image uploaded successfully!");
        loadImages(); // Reload images to show the new upload
        // Clear the file input
        e.target.value = "";
      } else {
        alert(`Error: ${error}`);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload image.");
    }
  };

  return (
    <div>
      <Navigation />

      <section className="questions">
        <h2 className="title_FAQ">Photo Album</h2>
        {PHOTO_SECTIONS.map(({ key, label, showGallery }) => (
          <AccordionSection
            key={key}
            label={label}
            onClick={handleAccordionClick}
          >
            {/* Display images for this category */}
            <div className="gallery-grid">
              {imagesByCategory[key]?.length > 0 ? (
                imagesByCategory[key].map((img, index) => {
                  console.log(`Rendering image for ${key}:`, img);
                  return (
                    <img
                      key={`${key}-${index}-${img.imageBase64?.slice(0, 20)}`}
                      src={`data:${img.contentType};base64,${img.imageBase64}`}
                      alt={img.name || `${label} image`}
                      className="gallery-img"
                      onLoad={() =>
                        console.log(`Image loaded successfully for ${key}`)
                      }
                      onError={(e) =>
                        console.error(`Failed to load image for ${key}:`, e)
                      }
                    />
                  );
                })
              ) : (
                <p>No images uploaded yet for this section.</p>
              )}
            </div>

            {/* Upload input for this specific category */}
            <div className="upload-section">
              <label htmlFor={`upload-${key}`} className="upload-label">
                Upload image for {label}:
              </label>
              <input
                id={`upload-${key}`}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, key)}
              />
            </div>
          </AccordionSection>
        ))}
      </section>

      <div className="musician_container">
        <h1 className="title_orchestra">Video Clips</h1>
        {VIDEO_SECTIONS.map(({ key, label }) => (
          <AccordionSection
            key={key}
            label={label}
            onClick={handleAccordionClick}
          >
            {/* Placeholder content */}
            <p>Video content coming soon...</p>
          </AccordionSection>
        ))}
      </div>

      <Navigation />
      <Footer />
    </div>
  );
};

export default Gallery;
