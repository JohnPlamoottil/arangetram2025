import { Fragment, StrictMode } from "react";
import "./index.css";
import Home from "./components/pages/home/home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/pages/video/video";
import Program from "./components/pages/program/program";
import Instructor from "./components/pages/instructor/instructor";
import Orchestra from "./components/pages/orchestra/orchestra";
import Venue from "./components/pages/venue/venue";
import Livestream from "./components/pages/livestream/livestream";
import FAQs from "./components/pages/faqs/faqs";
import Guestbook from "./components/pages/guestbook/guestbook";
import Dancer from "./components/pages/dancer/dancer";
import Navigation from "./components/navigation-links/navigation-links";
import ScrollToTop from "./components/scroll_to_top";
import ComingSoon from "./components/coming_soon/coming_soon";
import BackgroundAudio from "./components/background_audio";
import Gallery from "./components/pages/gallery/gallery.jsx";

export default function App() {
  return (
    <Router>
      <BackgroundAudio />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/program" element={<Program />} />

        <Route path="/instructor" element={<Instructor />} />

        <Route path="/video" element={<Video />} />

        <Route path="/livestream" element={<Livestream />} />

        <Route path="/orchestra" element={<Orchestra />} />

        <Route
          path="/video"
          element={
            <ComingSoon
              message="Video gallery launches July 1!"
              targetDate="2025-07-01T00:00:00"
            >
              <div>
                <Navigation />
                <h1>Video Gallery</h1>
                <p>
                  This is the videoe gallery content that will be available on
                  July 1st, 2025.
                </p>
              </div>
            </ComingSoon>
          }
        />

        <Route path="/venue" element={<Venue />} />

        <Route path="/faqs" element={<FAQs />} />
        <Route
          path="/guestbook"
          element={
            <>
              <Navigation />
              <Guestbook />
            </>
          }
        />
        <Route path="/dancer" element={<Dancer />} />

        <Route path="/venue" element={<Venue />} />

        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
