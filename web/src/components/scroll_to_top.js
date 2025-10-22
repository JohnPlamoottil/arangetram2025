// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // scroll to top whenever pathname or query string changes
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname, search]);

  return null; // This component doesn’t render anything
}
