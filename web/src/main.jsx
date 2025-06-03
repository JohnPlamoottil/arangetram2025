import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/pages/Home";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/pages/video";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/program" element={}></> */}
        <Route path="/video" element={<Video />} />
      </Routes>
    </Router>
  </StrictMode>
);
