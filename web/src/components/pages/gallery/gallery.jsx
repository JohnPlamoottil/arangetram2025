import React, { useState, useEffect } from "react";
import Navigation from "../../navigation-links/navigation-links";
import Footer from "../../footer/footer";
import "./gallery.css";
import ComingSoon from "../../coming_soon/coming_soon";

/* ---------- CONFIG ---------- */
const PHOTO_SECTIONS = [
  {
    key: "lobby",
    description: "Please upload any pictures you took relevent to ",
    label: "Lobby Decorations",
  },
  {
    key: "auditorium",
    description: "Please upload any pictures you took relevent to inside the",
    label: "Auditorium (Audience Clips)",
  },
  {
    key: "pushpanjali",
    description:
      "Please upload any pictures you took relevent to the first group performance, ",
    label: "Pushpanjali",
  },
  {
    key: "solos1",
    description:
      "Please upload any pictures you took relevent to the first three  ",
    label: "Solos: Michelle, Andrea, Jana",
  },
  {
    key: "varnum",
    description:
      "Please upload any pictures you took relevent to the Centerpiece,",
    label: "Varnum",
  },
  {
    key: "solos2",
    description:
      "Please upload any pictures you took relevent to the second three  ",
    label: "Solos: Rose, Jenna, Amarya",
  },
  {
    key: "thillana",
    description:
      "Please upload any pictures you took relevent to the finale group performance  ",
    label: "Thillana",
  },
  {
    key: "reception",
    description: "Please upload any pictures you took during the ",
    label: "Reception",
  },
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
  const [selectedFiles, setSelectedFiles] = useState({}); // { cat: File }
  const [uploading, setUploading] = useState({}); // { cat: bool }
  const [isRefreshing, setIsRefreshing] = useState(false);

  /* ---- Fetch & group images ---- */
  const loadImages = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("http://localhost:8080/api/images");
      const data = await res.json();

      if (res.ok && data.images) {
        const grouped = data.images.reduce((acc, img) => {
          const cat = img.category || "uncategorized";
          (acc[cat] = acc[cat] || []).push(img);
          return acc;
        }, {});
        console.log(grouped);
        setImagesByCategory(grouped);
      } else {
        console.error("Failed to load images:", data.error || "Unknown error");
      }
    } catch (err) {
      console.error("Error fetching images:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleDeleteImage = async (imageId) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await fetch(`http://localhost:8080/api/images/${imageId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        alert("Image deleted successfully");
        loadImages(); // refresh list
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete image.");
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

  /* ---- Select file (does not auto-upload) ---- */
  const handleFileSelect = (e, category) => {
    const file = e.target.files?.[0];
    setSelectedFiles((prev) => ({ ...prev, [category]: file }));
  };

  /* ---- Upload on button click ---- */
  const handleUploadClick = async (category) => {
    const file = selectedFiles[category];
    if (!file) return;

    setUploading((p) => ({ ...p, [category]: true }));
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
        setSelectedFiles((p) => ({ ...p, [category]: undefined })); // clear chosen file
      } else {
        alert(`Error: ${error}`);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload image.");
    } finally {
      setUploading((p) => ({ ...p, [category]: false }));
      loadImages(); // refresh AFTER button returns to normal
    }
  };

  /* ---- Grid styles ---- */
  const gridCSS = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
    gap: 10,
    marginTop: 10,
  };
  const imgCSS = {
    width: "100%",
    height: 180,
    objectFit: "cover",
    borderRadius: 6,
  };
  const btnCSS = {
    color: "#fff",
    background: "#0070f3",
    border: "none",
    padding: "6px 12px",
    borderRadius: 4,
    cursor: "pointer",
  };

  // const galleryContent = (
  /* ---------- JSX ---------- */
  return (
    <div>
      <Navigation />

      <section className="questions">
        <h2 className="title_FAQ">Photo Album</h2>
        {isRefreshing && (
          <p style={{ fontStyle: "italic", marginBottom: 10 }}>
            Refreshing images…
          </p>
        )}

        {PHOTO_SECTIONS.map(({ key, label, description }) => (
          <AccordionSection
            key={key}
            label={label}
            onClick={handleAccordionClick}
          >
            <p>
              {description}
              {label}
            </p>
            <div style={gridCSS}>
              {(imagesByCategory[key] || []).map((img, idx) => (
                <div
                  key={`${key}-${idx}-${img.imageBase64?.slice(0, 15)}`}
                  style={{ position: "relative" }}
                >
                  <img
                    src={`data:${img.contentType};base64,${img.imageBase64}`}
                    alt={img.name || `${label} image`}
                    style={imgCSS}
                  />
                  <button
                    onClick={() => handleDeleteImage(img._id)}
                    title="Delete image"
                    style={{
                      position: "absolute",
                      top: 6,
                      right: 6,
                      background: "rgba(0,0,0,0.7)",
                      border: "none",
                      borderRadius: "50%",
                      color: "#fff",
                      width: 24,
                      height: 24,
                      fontWeight: "bold",
                      fontSize: "16px",
                      cursor: "pointer",
                      lineHeight: "22px",
                      textAlign: "center",
                      padding: 0,
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* ---- File chooser & upload ---- */}
            <div
              style={{
                marginTop: 8,
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <input
                id={`file-${key}`}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e, key)}
              />
              <button
                style={btnCSS}
                onClick={() => handleUploadClick(key)}
                disabled={!selectedFiles[key] || uploading[key]}
              >
                {uploading[key] ? "Uploading…" : "Upload"}
              </button>
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

  // return <ComingSoon message="Gallery">{galleryContent}</ComingSoon>;
};

export default Gallery;

// If you want to show a coming soon placeholder instead, wrap like below:
