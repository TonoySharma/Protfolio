"use client";

import { useEffect } from "react";

export default function WelcomeVoice() {
  useEffect(() => {
    const audio = new Audio("/audio/welcome.mp3");

    audio.volume = 1;
    audio.preload = "auto";

    const playAudio = async () => {
      try {
        await audio.play();
        console.log("Welcome audio started");
      } catch (error) {
        console.log("Autoplay blocked:", error);
      }
    };

    const timer = setTimeout(playAudio, 1000);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
}