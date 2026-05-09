"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState([]);
  const trailRef = useRef([]);
  const frameRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const outerX = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.6 });
  const outerY = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.6 });

  const innerX = useSpring(rawX, { stiffness: 600, damping: 30 });
  const innerY = useSpring(rawY, { stiffness: 600, damping: 30 });

  useEffect(() => {
    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      trailRef.current = [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...trailRef.current.slice(0, 5),
      ];
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        setTrail([...trailRef.current]);
      });
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const onEnter = (e) => {
      if (
        e.target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor='pointer']")
      ) {
        setIsHovering(true);
      }
    };
    const onLeave = (e) => {
      if (
        e.target.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor='pointer']")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [rawX, rawY]);

  return (
    <>
      <style>{`
        @keyframes goldSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes goldPulseRing {
          0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
        * { cursor: none !important; }
      `}</style>

      {/* ── Dust trail ── */}
      {trail.map((point, i) => (
        <div
          key={point.id}
          style={{
            position: "fixed",
            top: point.y,
            left: point.x,
            width: `${6 - i}px`,
            height: `${6 - i}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle, #ffd700, #c9963a)`,
            opacity: (1 - i / 6) * 0.35,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9995,
            transition: "opacity 0.15s",
          }}
        />
      ))}

      {/* ── Outer ring ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
        className="hidden md:block"
      >
        {/* Spinning dashed gold ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{
            width: isHovering ? "52px" : isClicking ? "28px" : "38px",
            height: isHovering ? "52px" : isClicking ? "28px" : "38px",
            borderRadius: "50%",
            border: "1.2px dashed",
            borderColor: isHovering ? "#ffd700" : "rgba(201,150,58,0.7)",
            transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        {/* Solid inner ring */}
        <div style={{
          position: "absolute",
          inset: "6px",
          borderRadius: "50%",
          border: "0.8px solid",
          borderColor: isHovering ? "rgba(255,215,0,0.5)" : "rgba(201,150,58,0.3)",
          transition: "border-color 0.25s ease, inset 0.25s ease",
        }}/>

        {/* Pulse ring on hover */}
        {isHovering && (
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: "52px", height: "52px",
            borderRadius: "50%",
            border: "1px solid rgba(255,215,0,0.5)",
            animation: "goldPulseRing 1s ease-out infinite",
          }}/>
        )}

        {/* 4 corner diamond ticks */}
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              width: "4px", height: "4px",
              background: "#ffd700",
              borderRadius: "1px",
              opacity: isHovering ? 1 : 0.5,
              transform: `translate(-50%, -50%) rotate(${deg + 45}deg) translateY(-${isHovering ? 28 : 20}px)`,
              transition: "all 0.25s ease",
            }}
          />
        ))}
      </motion.div>

      {/* ── Inner dot ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        className="hidden md:block"
      >
        {/* Glow halo */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: isHovering ? "18px" : "12px",
          height: isHovering ? "18px" : "12px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,215,0,0.35) 0%, transparent 70%)",
          transition: "all 0.2s ease",
        }}/>

        {/* Core dot */}
        <motion.div
          animate={{ scale: isClicking ? 0.4 : isHovering ? 1.5 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #fff8dc 0%, #ffd700 50%, #c9963a 100%)",
            boxShadow: isHovering
              ? "0 0 10px 3px rgba(255,215,0,0.6)"
              : "0 0 6px 1px rgba(255,215,0,0.3)",
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorFollower;