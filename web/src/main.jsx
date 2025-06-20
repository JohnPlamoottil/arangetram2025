import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
import ScrollToTop from "./components/ScrollToTop";
import ComingSoon from "./components/coming_soon/coming_soon";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/program" element={<ComingSoon message={"Program"} />} />
        {/* <Route path="/program" element={<Program />} /> */}

        <Route
          path="/instructor"
          element={<ComingSoon message={"Instructor"} />}
        />
        {/* <Route path="/instructor" element={<Instructor />} /> */}

        <Route path="/video" element={<ComingSoon message={"Video"} />} />
        {/* <Route path="/video" element={<Video />} /> */}

        <Route
          path="/livestream"
          element={<ComingSoon message={"Livestream"} />}
        />
        {/* <Route path="/livestream" element={<Livestream />} /> */}

        <Route
          path="/orchestra"
          element={<ComingSoon message={"Orchestra"} />}
        />
        {/* <Route path="/orchestra" element={<Orchestra />} /> */}

        <Route
          path="/videos"
          element={
            <ComingSoon
              message="Video gallery launches July 1!"
              targetDate="2025-07-01T00:00:00"
            />
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
      </Routes>
    </Router>
  </StrictMode>
);
{
  /* Restricted pages: Program, Instructor, Video, Livestream, Orchestra */
  // Allowed pages before June21: home, venue, FAQ, guestbook, dancers */
}
