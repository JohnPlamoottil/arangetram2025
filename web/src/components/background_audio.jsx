import React, { useEffect, useRef, useState } from "react";

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const pausersRef = useRef(new Set());

  // 🎚️ Initialize volume and sync mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.01; // Set background volume between 0.0 and 1.0
      audioRef.current.muted = muted;
    }
  }, [muted]);

  // 🖱️ Auto play on first click (bypass browser autoplay restrictions)
  useEffect(() => {
    function handleClick() {
      if (audioRef.current && audioRef.current.paused && !muted) {
        audioRef.current.play().catch(() => {
          // background play failed (likely due to autoplay policies)
        });
      }
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [muted]);

  // Controller with pauser-tracking so multiple players can request pause and release
  useEffect(() => {
    const controller = {
      requestPause: (id) => {
        if (id) pausersRef.current.add(id);
        try {
          if (audioRef.current && !audioRef.current.paused)
            audioRef.current.pause();
        } catch {
          /* ignore */
        }
      },
      releasePause: (id) => {
        if (id) pausersRef.current.delete(id);
        const otherPlaying = Array.from(
          document.querySelectorAll("audio, video")
        ).some((el) => el !== audioRef.current && !el.paused && !el.muted);
        if (pausersRef.current.size === 0 && !otherPlaying && !muted) {
          try {
            if (audioRef.current && audioRef.current.paused)
              audioRef.current.play();
          } catch {
            /* ignore */
          }
        }
      },
      play: () => {
        try {
          if (audioRef.current) audioRef.current.play();
        } catch {
          /* ignore */
        }
      },
      pause: () => {
        try {
          if (audioRef.current) audioRef.current.pause();
        } catch {
          /* ignore */
        }
      },
      isPlaying: () => !!(audioRef.current && !audioRef.current.paused),
      toggleMute: () => {
        try {
          if (audioRef.current) {
            setMuted((prev) => !prev); // Use functional update to avoid stale closure
          }
        } catch {
          /* ignore */
        }
      },
      setVolume: (v) => {
        try {
          if (audioRef.current) audioRef.current.volume = v;
        } catch {
          /* ignore */
        }
      },
    };

    window.BackgroundAudioController = controller;

    function onNativeMediaPlay(e) {
      const target = e.target;
      if (target === audioRef.current) return;
      controller.requestPause("native");
    }
    function onNativeMediaPauseOrEnded() {
      controller.releasePause("native");
    }

    document.addEventListener("play", onNativeMediaPlay, true);
    document.addEventListener("playing", onNativeMediaPlay, true);
    document.addEventListener("pause", onNativeMediaPauseOrEnded, true);
    document.addEventListener("ended", onNativeMediaPauseOrEnded, true);

    return () => {
      delete window.BackgroundAudioController;
      document.removeEventListener("play", onNativeMediaPlay, true);
      document.removeEventListener("playing", onNativeMediaPlay, true);
      document.removeEventListener("pause", onNativeMediaPauseOrEnded, true);
      document.removeEventListener("ended", onNativeMediaPauseOrEnded, true);
    };
  }, [muted]);

  return (
    <>
      <audio ref={audioRef} loop preload="auto" muted={muted}>
        <source src="/bkgd_music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* small floating control to toggle mute */}
      <button
        aria-label="Toggle background audio"
        onClick={() => {
          if (window.BackgroundAudioController) {
            window.BackgroundAudioController.toggleMute();
          }
        }}
        style={{
          position: "fixed",
          bottom: 12,
          left: 12,
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "none",
          padding: "8px 10px",
          borderRadius: 6,
          zIndex: 9999,
          cursor: "pointer",
        }}
      >
        {muted ? "Unmute Music" : "Mute Music"}
      </button>
    </>
  );
};

export default BackgroundAudio;
