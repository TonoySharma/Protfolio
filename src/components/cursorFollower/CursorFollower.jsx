"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const pos = {
      x: mouse.x,
      y: mouse.y,
    };

    let animationFrame;

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      // Smoothness (0.12 = slower, 0.2 = faster)
      pos.x += (mouse.x - pos.x) * 0.14;
      pos.y += (mouse.y - pos.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.x}px`;
        dotRef.current.style.top = `${mouse.y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${pos.x}px`;
        ringRef.current.style.top = `${pos.y}px`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const enter = () => {
      if (!ringRef.current) return;

      ringRef.current.style.width = "80px";
      ringRef.current.style.height = "80px";
      ringRef.current.style.background = "rgba(6,182,212,.12)";
      ringRef.current.style.borderColor = "#22d3ee";
    };

    const leave = () => {
      if (!ringRef.current) return;

      ringRef.current.style.width = "42px";
      ringRef.current.style.height = "42px";
      ringRef.current.style.background = "transparent";
      ringRef.current.style.borderColor = "rgba(34,211,238,.5)";
    };

    const clickDown = () => {
      ringRef.current.style.transform =
        "translate(-50%,-50%) scale(.8)";
    };

    const clickUp = () => {
      ringRef.current.style.transform =
        "translate(-50%,-50%) scale(1)";
    };

    const hoverElements = document.querySelectorAll(
      "a,button,input,textarea,select,[data-cursor]"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", clickDown);
    window.addEventListener("mouseup", clickUp);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", clickDown);
      window.removeEventListener("mouseup", clickUp);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60 transition-[width,height,background,border-color,transform] duration-300 ease-out md:block"
      />

      {/* Glow */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-3xl md:block"
        style={{
          left: 0,
          top: 0,
        }}
        ref={(el) => {
          if (!el) return;

          const moveGlow = (e) => {
            el.style.left = e.clientX + "px";
            el.style.top = e.clientY + "px";
          };

          window.onmousemove = moveGlow;
        }}
      />

      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee] md:block"
      />
    </>
  );
}