
"use client";

import { useEffect } from "react";

export default function WelcomeVoice() {
  useEffect(() => {
    const audio = new Audio("/audio/welcome.mp3");
    audio.volume = 1;
    audio.preload = "auto";

    const playWelcome = () => {
      audio.play().catch((error) => {
        console.log("Browser blocked autoplay:", error);
      });
    };

    const timer = setTimeout(playWelcome, 1000);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
}
