"use client";

import { useEffect } from "react";

export default function WelcomeVoice() {
  useEffect(() => {
    const playedKey = "tonoy-portfolio-welcome-played";

    try {
      if (sessionStorage.getItem(playedKey) === "true") {
        return;
      }
    } catch (error) {
      console.warn("Session storage unavailable:", error);
      return;
    }

    let cancelled = false;
    let audio;

    const timer = setTimeout(async () => {
      if (cancelled) return;

      try {
        audio = new Audio("/audio/welcome.mp3");
        audio.volume = 1;

        await audio.play();

        sessionStorage.setItem(playedKey, "true");
      } catch (error) {
        console.warn("Welcome audio failed:", error);
      }
    }, 1000);

    return () => {
      cancelled = true;
      clearTimeout(timer);

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return null;
}