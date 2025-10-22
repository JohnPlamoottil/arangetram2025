import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./livestream.css";
import frameImage from "../../../assets/macbookpro.png";
import Footer from "../../footer/footer";

const Livestream = () => {
  React.useEffect(() => {
    function setupPlayer() {
      if (!(window.YT && window.YT.Player)) return;
      const player = new window.YT.Player("livestream-yt", {
        events: {
          onStateChange: (e) => {
            const controller = window.BackgroundAudioController;
            const id = "livestream";
            if (!controller) return;
            // When this player starts playing, pause other YT players and request background audio pause
            if (e.data === window.YT.PlayerState.PLAYING) {
              try {
                if (window.__ytPlayers && window.__ytPlayers.length) {
                  window.__ytPlayers.forEach((p) => {
                    try {
                      if (p !== player && p.pauseVideo) p.pauseVideo();
                    } catch {
                      // ignore per-player errors
                    }
                  });
                }
              } catch {
                // ignore
              }
              if (controller.requestPause) controller.requestPause(id);
              else if (controller.pause) controller.pause();
            } else if (
              e.data === window.YT.PlayerState.PAUSED ||
              e.data === window.YT.PlayerState.ENDED
            ) {
              // release pause request for this player so background audio can resume when appropriate
              if (controller.releasePause) controller.releasePause(id);
              else if (controller.play) controller.play();
            }
          },
        },
      });

      // register this player in a global list so other players can pause it when needed
      try {
        window.__ytPlayers = window.__ytPlayers || [];
        window.__ytPlayers.push(player);
      } catch {
        // ignore
      }

      // toggle allowfullscreen based on viewport width (disable fullscreen on small screens)
      try {
        const iframe = document.getElementById("livestream-yt");
        if (iframe) {
          if (window.innerWidth <= 768) {
            iframe.removeAttribute("allowfullscreen");
            // ensure picture-in-picture is removed on small screens
            iframe.setAttribute(
              "allow",
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            );
          } else {
            iframe.setAttribute("allowfullscreen", "true");
            iframe.setAttribute(
              "allow",
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            );
          }
        }
      } catch {
        // ignore
      }

      return () => {
        try {
          // remove from global registry
          window.__ytPlayers = (window.__ytPlayers || []).filter(
            (p) => p !== player
          );
          player && player.destroy && player.destroy();
        } catch {
          // ignore destroy errors
        }
      };
    }

    if (window.YT && window.YT.Player) {
      setupPlayer();
    } else {
      window.onYouTubeIframeAPIReady = function () {
        setupPlayer();
      };
    }
  }, []);
  return (
    <div className="video-footer">
      <Navigation />
      <h1 className="video-title">Our Live Performance</h1>
      <p className="livestream_start_direction">
        The Performance Starts at the 9min 47sec mark
      </p>

      <div className="video-wrapper__livestream ">
        <img src={frameImage} alt="Frame" className="video-frame_livestream" />
        <div className="outer_graduation_video2025">
          <iframe
            id="livestream-yt"
            src="https://www.youtube.com/embed/5iR0UQ6hRo4?si=IIQ6B8OVTTy42hRh&enablejsapi=1&modestbranding=1&rel=0"
            title="Bharatanatyam Arangetram - Amarya, Rose, Jana, Andrea, Jenna, & Michele"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="graduation_video2025"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Livestream;
