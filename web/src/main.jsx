import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/pages/video/video";
import Program from "./components/pages/program/program";
import Instructor from "./components/pages/instructor/instructor";
import Orchestra from "./components/pages/orchestra/orchestra";
import Venue from "./components/pages/venue/venue";
import Livestream from "./components/pages/livestream/livestream";
import FAQs from "./components/pages/faqs/faqs";
import Guestbook from "./components/pages/guestbook/guestbook";
import Dancer from "./components/pages/dancer/dancer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/program" element={<Program />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/orchestra" element={<Orchestra />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/livestream" element={<Livestream />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/dancer" element={<Dancer />} />
      </Routes>
    </Router>
  </StrictMode>
);
