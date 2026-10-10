"use client";

import { useEffect } from "react";

export default function WelcomeVoice() {
  useEffect(() => {
    // This component should play only once per browser tab.
    const playedKey = "tonoy-portfolio-welcome-played";

    if (sessionStorage.getItem(playedKey)) {
      return;
    }

    const audio = new Audio("/audio/welcome.mp3");
    audio.volume = 1;
    audio.preload = "auto";

    let cancelled = false;

    const playWelcome = async () => {
      if (cancelled) return;

      try {
        // Mark it before playing to prevent duplicate playback.
        sessionStorage.setItem(playedKey, "true");
        await audio.play();
      } catch (error) {
        // Allow another attempt if playback was blocked.
        sessionStorage.removeItem(playedKey);
        console.warn("Welcome audio could not play:", error);
      }
    };

    const timer = setTimeout(playWelcome, 1000);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      audio.pause();
    };
  }, []);

  return null;
}