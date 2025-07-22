// gallery.jsx
import React, { useState, useEffect } from "react";
import Navigation from "../../navigation-links/navigation-links";
import Footer from "../../footer/footer";
import "./gallery.css";
import ComingSoon from "../../coming_soon/coming_soon";

const HOST = import.meta.env.VITE_HOST;

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
  const [videosByCategory, setVideosByCategory] = useState({});
  const [selectedFiles, setSelectedFiles] = useState({}); // { cat: FileList }
  const [selectedVideoFiles, setSelectedVideoFiles] = useState({}); // { cat: FileList }
  const [uploading, setUploading] = useState({}); // { cat: bool }
  const [uploadingVideos, setUploadingVideos] = useState({}); // { cat: bool }
  const [uploadProgress, setUploadProgress] = useState({}); // { cat: { current: number, total: number } }
  const [videoUploadProgress, setVideoUploadProgress] = useState({}); // { cat: { current: number, total: number } }
  const [isRefreshing, setIsRefreshing] = useState(false);

  /* ---- Fetch & group images ---- */
  const loadImages = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch(`${HOST}/api/images`);
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

  /* ---- Fetch & group videos ---- */
  const loadVideos = async () => {
    try {
      const res = await fetch(`${HOST}/api/videos`);
      const data = await res.json();

      if (res.ok && data.videos) {
        const grouped = data.videos.reduce((acc, video) => {
          const cat = video.category || "uncategorized";
          (acc[cat] = acc[cat] || []).push(video);
          return acc;
        }, {});
        console.log(grouped);
        setVideosByCategory(grouped);
      } else {
        console.error("Failed to load videos:", data.error || "Unknown error");
      }
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  const handleDeleteImage = async (imageId) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await fetch(`${HOST}/api/images/${imageId}`, {
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

  const handleDeleteVideo = async (videoId) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      const res = await fetch(`${HOST}/api/videos/${videoId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        alert("Video deleted successfully");
        loadVideos(); // refresh list
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete video.");
    }
  };

  useEffect(() => {
    loadImages();
    loadVideos();
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

  /* ---- Select multiple files ---- */
  const handleFileSelect = (e, category) => {
    const files = e.target.files;
    setSelectedFiles((prev) => ({ ...prev, [category]: files }));
  };

  const handleVideoFileSelect = (e, category) => {
    const files = e.target.files;
    setSelectedVideoFiles((prev) => ({ ...prev, [category]: files }));
  };

  /* ---- Upload multiple images ---- */
  const handleUploadClick = async (category) => {
    const files = selectedFiles[category];
    if (!files || files.length === 0) return;

    setUploading((p) => ({ ...p, [category]: true }));
    setUploadProgress((p) => ({
      ...p,
      [category]: { current: 0, total: files.length },
    }));

    const fd = new FormData();

    // Append all files to FormData
    for (let i = 0; i < files.length; i++) {
      fd.append("images", files[i]);
    }
    fd.append("category", category);

    try {
      const res = await fetch(`${HOST}/api/upload-multiple`, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();

      if (res.ok) {
        const { successful, failed, errors } = data;

        // Show result message
        if (failed === 0) {
          alert(`All ${successful} images uploaded successfully!`);
        } else if (successful === 0) {
          alert(`Failed to upload all images. ${failed} errors occurred.`);
        } else {
          alert(
            `${successful} images uploaded successfully, ${failed} failed.`
          );
        }

        // Log errors for debugging
        if (errors && errors.length > 0) {
          console.error("Upload errors:", errors);
        }
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload images.");
    } finally {
      setSelectedFiles((p) => ({ ...p, [category]: null })); // clear chosen files
      setUploading((p) => ({ ...p, [category]: false }));
      setUploadProgress((p) => ({ ...p, [category]: null }));
      loadImages(); // refresh images
    }
  };

  /* ---- Upload multiple videos ---- */
  const handleVideoUploadClick = async (category) => {
    const files = selectedVideoFiles[category];
    if (!files || files.length === 0) return;

    setUploadingVideos((p) => ({ ...p, [category]: true }));
    setVideoUploadProgress((p) => ({
      ...p,
      [category]: { current: 0, total: files.length },
    }));

    const fd = new FormData();

    // Append all files to FormData
    for (let i = 0; i < files.length; i++) {
      fd.append("videos", files[i]);
    }
    fd.append("category", category);

    try {
      const res = await fetch(`${HOST}/api/upload-multiple-videos`, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();

      if (res.ok) {
        const { successful, failed, errors } = data;

        // Show result message
        if (failed === 0) {
          alert(`All ${successful} videos uploaded successfully!`);
        } else if (successful === 0) {
          alert(`Failed to upload all videos. ${failed} errors occurred.`);
        } else {
          alert(
            `${successful} videos uploaded successfully, ${failed} failed.`
          );
        }

        // Log errors for debugging
        if (errors && errors.length > 0) {
          console.error("Upload errors:", errors);
        }
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload videos.");
    } finally {
      setSelectedVideoFiles((p) => ({ ...p, [category]: null })); // clear chosen files
      setUploadingVideos((p) => ({ ...p, [category]: false }));
      setVideoUploadProgress((p) => ({ ...p, [category]: null }));
      loadVideos(); // refresh videos
    }
  };

  // image expanding modal
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (img) => {
    setModalImage(img);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  // Optional: close on ESC
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

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
    cursor: "pointer", // indicate clickable
  };
  const videoCSS = {
    width: "100%",
    height: 180,
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

  /* ---------- JSX ---------- */
  // const galleryContent = (
  return (
    <div>
      <Navigation />

      <section className="questions">
        <h2 className="title_FAQ">Photo Album</h2>
        <a
          href="https://moderndigital.pixieset.com/arangetram2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-button"
        >
          View Photo Gallery
        </a>
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
                  key={`${key}-${idx}-${img._id}`}
                  style={{ position: "relative" }}
                >
                  {/* Now using Cloudinary URL directly instead of base64 */}
                  <img
                    src={img.imageUrl}
                    alt={img.name || `${label} image`}
                    style={imgCSS}
                    onClick={() => handleImageClick(img)}
                    onError={(e) => {
                      console.error("Image failed to load:", img.imageUrl);
                      e.target.style.opacity = 0.5;
                      e.target.alt = "Image failed to load";
                    }}
                  />
                  <button
                    className="trash_button"
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

            {/* ---- Multiple picture chooser & upload ---- */}
            <div
              style={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  id={`file-${key}`}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFileSelect(e, key)}
                />
                <button
                  style={btnCSS}
                  onClick={() => handleUploadClick(key)}
                  disabled={!selectedFiles[key] || uploading[key]}
                >
                  {uploading[key] ? "Uploading…" : "Upload All"}
                </button>
              </div>

              {selectedFiles[key] && selectedFiles[key].length > 0 && (
                <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
                  {selectedFiles[key].length} image(s) selected
                </p>
              )}

              {uploadProgress[key] && (
                <div style={{ fontSize: "14px", color: "#0070f3" }}>
                  Uploading all files...
                </div>
              )}
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
            <p>Please upload any videos you took relevant to {label}</p>
            <div style={gridCSS}>
              {(videosByCategory[key] || []).map((video, idx) => (
                <div
                  key={`${key}-${idx}-${video._id}`}
                  style={{ position: "relative" }}
                >
                  <video
                    src={video.videoUrl}
                    style={videoCSS}
                    controls
                    onError={(e) => {
                      console.error("Video failed to load:", video.videoUrl);
                      e.target.style.opacity = 0.5;
                    }}
                  />
                  <button
                    className="trash_button"
                    onClick={() => handleDeleteVideo(video._id)}
                    title="Delete video"
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

            {/* ---- Multiple video file chooser & upload ---- */}
            <div
              style={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div className="upload-box">
                <input
                  id={`video-file-${key}`}
                  type="file"
                  accept="video/*"
                  multiple
                  onChange={(e) => handleVideoFileSelect(e, key)}
                />
                <button
                  style={btnCSS}
                  onClick={() => handleVideoUploadClick(key)}
                  disabled={!selectedVideoFiles[key] || uploadingVideos[key]}
                >
                  {uploadingVideos[key] ? "Uploading…" : "Upload All"}
                </button>
              </div>

              {selectedVideoFiles[key] &&
                selectedVideoFiles[key].length > 0 && (
                  <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
                    {selectedVideoFiles[key].length} video(s) selected
                  </p>
                )}

              {videoUploadProgress[key] && (
                <div style={{ fontSize: "14px", color: "#0070f3" }}>
                  Uploading all files...
                </div>
              )}
            </div>
          </AccordionSection>
        ))}
      </div>

      {/* Image Modal - Now uses Cloudinary URL */}
      {modalImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={handleCloseModal}
        >
          <img
            src={modalImage.imageUrl}
            alt={modalImage.name}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "8px",
              boxShadow: "0 0 10px #000",
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={handleCloseModal}
            style={{
              position: "absolute",
              top: 20,
              right: 30,
              fontSize: 32,
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      )}

      <Navigation />
      <Footer />
    </div>
  );

  // return <ComingSoon message="Gallery">{galleryContent}</ComingSoon>;
};

export default Gallery;
