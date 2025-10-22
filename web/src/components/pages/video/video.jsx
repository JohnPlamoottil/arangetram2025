import React from "react";
import "./video.css"; // optional for styling
import Navigation from "../../navigation-links/navigation-links";
import frameImage from "../../../assets/macbookpro.png";
import ComingSoon from "../../coming_soon/coming_soon";

const Video = () => {
  // const videoContent = (
  React.useEffect(() => {
    // Add enablejsapi=1 to all youtube iframe srcs if missing
    const iframes = Array.from(document.querySelectorAll("iframe")).filter(
      (f) => f.src && f.src.includes("youtube.com/embed")
    );

    iframes.forEach((f) => {
      // Ensure enablejsapi parameter exists
      if (!/enablejsapi=1/.test(f.src)) {
        const sep = f.src.includes("?") ? "&" : "?";
        f.src = f.src + sep + "enablejsapi=1&modestbranding=1&rel=0";
      }
    });

    // Manage fullscreen permission based on viewport width
    function updateFullscreenPermission() {
      const allowWithFs =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      const allowNoFs =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

      const useFs = window.innerWidth > 768; // allow fullscreen only above 768px
      iframes.forEach((f) => {
        f.setAttribute("allow", useFs ? allowWithFs : allowNoFs);
        if (useFs) {
          f.setAttribute("allowfullscreen", "");
        } else {
          f.removeAttribute("allowfullscreen");
        }
      });
    }

    updateFullscreenPermission();
    window.addEventListener("resize", updateFullscreenPermission);

    // Load YouTube IFrame API to control players so we can pause others when one plays
    let players = [];
    function setupPlayer(iframe, idx) {
      const id = iframe.id || `yt-player-${idx}`;
      if (!iframe.id) iframe.id = id;

      const player = new window.YT.Player(id, {
        events: {
          onReady: (event) => {
            // Store reference to this player
            try {
              window.__ytPlayers = window.__ytPlayers || [];
              window.__ytPlayers.push(event.target);
            } catch (er) {
              console.debug("Failed to register YT player:", er);
            }
          },
          onStateChange: (event) => {
            const controller = window.BackgroundAudioController;
            const thisId = id; // unique per iframe

            if (event.data === window.YT.PlayerState.PLAYING) {
              // Pause other YouTube players
              try {
                if (window.__ytPlayers && window.__ytPlayers.length) {
                  window.__ytPlayers.forEach((p) => {
                    try {
                      if (p !== event.target && p.pauseVideo) {
                        p.pauseVideo();
                      }
                    } catch (er) {
                      console.debug("Failed to pause other player:", er);
                    }
                  });
                }
              } catch (er) {
                console.debug("Error managing other players:", er);
              }

              // Request background audio pause
              if (controller && controller.requestPause) {
                controller.requestPause(thisId);
              }
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              if (controller && controller.releasePause) {
                controller.releasePause(thisId);
              }
            }
          },
        },
      });
      return player;
    }

    function onYouTubeIframeAPIReady() {
      players = iframes.map((f, idx) => setupPlayer(f, idx));
    }

    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    // Clean up old players on YT API load
    try {
      if (window.__ytPlayers && window.__ytPlayers.length) {
        window.__ytPlayers.forEach((p) => {
          try {
            if (p && p.destroy) p.destroy();
          } catch (er) {
            console.debug("Failed to destroy player:", er);
          }
        });
        window.__ytPlayers = [];
      }
    } catch (er) {
      console.debug("Error cleaning up players:", er);
    }

    return () => {
      window.removeEventListener("resize", updateFullscreenPermission);
      // destroy players if API loaded
      if (window.YT && window.YT.Player) {
        try {
          players.forEach((p) => p && p.destroy && p.destroy());
        } catch (err) {
          // log destroy errors in debug only
          console.debug("Error destroying YT players:", err);
        }
      }
    };
  }, []);

  return (
    <div
      className="video-page"
      style={{ textAlign: "center", padding: "2rem" }}
    >
      <Navigation />
      <h1 className="video-title">Dance Memories - Reflection ~2015-2025</h1>
      <h2 className="video-subtitle">Kalakshetra Competition 2019</h2>
      <div className="video-overlay"></div>

      <div className="video-wrapper__video">
        <img src={frameImage} alt="Frame" className="video-frame_video" />
        <iframe
          id="yt-player-0"
          src="https://www.youtube.com/embed/btN6NSrr9H4?enablejsapi=1&modestbranding=1&rel=0"
          title="Bharatanatyam 2019"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="competition_video2019"
        ></iframe>
      </div>
      <h2 className="video-subtitle">Memorable Reflection Video</h2>
      <div className="video-overlay"></div>

      <div className="video-wrapper__video">
        <img src={frameImage} alt="Frame" className="video-frame_video" />
        <iframe
          id="yt-player-1"
          src="https://www.youtube.com/embed/-yZseWMFdKM?si=9j6NdfWQ0mwEA4l7&enablejsapi=1&modestbranding=1&rel=0"
          title="Reflection Video Arangetram"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="reflection"
        ></iframe>
      </div>
      <Navigation />
    </div>
  );
  // return <ComingSoon message="Reflection Videos">{videoContent}</ComingSoon>;
};

export default Video;

// // automatically makes the page available on Sat June21 6pm CST //
//   if (new Date() < new Date("2025-06-21 T18:00:00")) {
//     console.log(new Date());
//     return <ComingSoon message={"Video"} />;
//   } else {}
//     return ()
