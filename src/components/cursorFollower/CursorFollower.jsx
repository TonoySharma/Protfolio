'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor = () => {
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'text'

  // Spring physics for ultra-smooth buttery feel
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Check for buttons, links, or clickable elements
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setCursorState('hover');
      } else if (
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'P' ||
        target.tagName === 'SPAN'
      ) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* 1. Core Glowing Neon Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#06b6d4]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorState === 'hover' ? 0 : 1,
          opacity: cursorState === 'hover' ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* 2. Main Fluid Aurora Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-gradient-to-tr from-violet-600/30 via-cyan-500/20 to-purple-500/40 backdrop-blur-[3px] border border-white/20"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState === 'hover' ? 64 : cursorState === 'text' ? 24 : 40,
          height: cursorState === 'hover' ? 64 : cursorState === 'text' ? 24 : 40,
          borderColor:
            cursorState === 'hover'
              ? 'rgba(168, 85, 247, 0.8)'
              : cursorState === 'text'
              ? 'rgba(6, 182, 212, 0.5)'
              : 'rgba(255, 255, 255, 0.15)',
          boxShadow:
            cursorState === 'hover'
              ? '0 0 35px rgba(168, 85, 247, 0.5), inset 0 0 15px rgba(168, 85, 247, 0.3)'
              : '0 0 20px rgba(6, 182, 212, 0.15)',
          background:
            cursorState === 'hover'
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(6, 182, 212, 0.15) 100%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(3, 0, 20, 0) 70%)',
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 25,
        }}
      />

      {/* 3. Outer Ambient Halo Trail */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-violet-600/10 blur-2xl"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorState === 'hover' ? 1.5 : 1,
          opacity: cursorState === 'hover' ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
};

export default Cursor;