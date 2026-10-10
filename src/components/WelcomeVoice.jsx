"use client";

import { useEffect } from "react";

export default function WelcomeVoice() {
  useEffect(() => {
    const audio = new Audio("/audio/welcome.mp3");

    audio.volume = 1;
    audio.preload = "auto";

    const playWelcome = async () => {
      try {
        await audio.play();
        console.log("Welcome audio is playing");
      } catch (error) {
        console.warn("Welcome audio blocked:", error.name, error.message);
      }
    };

    const timer = setTimeout(playWelcome, 1000);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.src = "";
    };
  }, []);

  return null;
}