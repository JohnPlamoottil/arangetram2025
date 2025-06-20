import React, { useEffect, useRef } from "react";

const BackgroundAudio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.01; // Set volume between 0.0 and 1.0
    }
  }, []);

  useEffect(() => {
    function handleClick() {
      audioRef.current.play();
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop preload="auto">
      <source src="/bkgd_music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundAudio;
