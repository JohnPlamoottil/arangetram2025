import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/pages/Home";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/pages/video";
import Program from "./components/pages/program";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/program" element={<Program />} />
        <Route path="/program" element={<Program />} />
      </Routes>
    </Router>
  </StrictMode>
);
