import React, { useState, useEffect } from "react";
import Navigation from "../../navigation-links/navigation-links";
import Footer from "../../footer/footer";
import "./gallery.css";

/* ---------- CONFIG ---------- */
const PHOTO_SECTIONS = [
  { key: "lobby", label: "Lobby Decorations" },
  { key: "auditorium", label: "Auditorium (Audience Clips)" },
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

/* ---------- REUSABLE ACCORDION ---------- */
const AccordionSection = ({ label, children, onClick }) => (
  <>
    <button className="accordion" onClick={onClick}>
      {label}
    </button>
    <div className="panel">{children}</div>
  </>
);

/* ---------- MAIN COMPONENT ---------- */
const Gallery = () => {
  const [imagesByCategory, setImagesByCategory] = useState({});

  /* ---- Fetch & group images ---- */
  const loadImages = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/images");
      const data = await res.json();

      if (res.ok && data.images) {
        const grouped = data.images.reduce((acc, img) => {
          const cat = img.category || "uncategorized";
          (acc[cat] = acc[cat] || []).push(img);
          return acc;
        }, {});
        setImagesByCategory(grouped);
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

  /* ---- Accordion toggle ---- */
  const handleAccordionClick = (e) => {
    const btn = e.target;
    const panel = btn.nextElementSibling;
    btn.classList.toggle("slide");
    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : `${panel.scrollHeight}px`;
  };

  /* ---- Upload ---- */
  const handleImageUpload = async (e, category) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fd = new FormData();
    fd.append("image", file);
    fd.append("category", category);

    try {
      const res = await fetch("http://localhost:8080/api/upload", {
        method: "POST",
        body: fd,
      });
      const { error } = await res.json();
      if (res.ok) {
        alert("Image uploaded successfully!");
        loadImages();
        e.target.value = ""; // reset file input
      } else {
        alert(`Error: ${error}`);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload image.");
    }
  };

  /* ---- Grid styles (inline to avoid extra CSS edits) ---- */
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
    gap: "10px",
    marginTop: "10px",
  };
  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "6px",
  };

  /* ---------- JSX ---------- */
  return (
    <div>
      <Navigation />

      <section className="questions">
        <h2 className="title_FAQ">Photo Album</h2>

        {PHOTO_SECTIONS.map(({ key, label }) => (
          <AccordionSection
            key={key}
            label={label}
            onClick={handleAccordionClick}
          >
            {/* --- Images grid --- */}
            <div style={gridStyle}>
              {(imagesByCategory[key] || []).map((img, idx) => (
                <img
                  key={`${key}-${idx}-${img.imageBase64?.slice(0, 15)}`}
                  src={`data:${img.contentType};base64,${img.imageBase64}`}
                  alt={img.name || `${label} image`}
                  style={imageStyle}
                />
              ))}
            </div>

            {/* --- Upload input --- */}
            <div style={{ marginTop: "8px" }}>
              <label
                htmlFor={`upload-${key}`}
                style={{ display: "block", marginBottom: "4px" }}
              >
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
            <p>Video content coming soon…</p>
          </AccordionSection>
        ))}
      </div>

      <Navigation />
      <Footer />
    </div>
  );
};

export default Gallery;
