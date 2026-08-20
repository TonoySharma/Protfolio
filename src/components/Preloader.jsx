"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 0);
          return 100;
        }
        return prev + 1;
      });
    }, 10); 

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-950 text-white font-sans"
        >
          {/* Logo / Brand Name */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-4xl font-bold tracking-wider uppercase mb-2">
              Tonoy<span className="text-blue-500">.</span>
            </h1>
            <p className="text-xs md:text-sm text-neutral-400 tracking-[0.3em] uppercase">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Progress Percentage */}
          <div className="mt-8 flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-mono font-extrabold text-neutral-200">
              {progress}%
            </span>

            {/* Loading Bar Container */}
            <div className="w-48 md:w-64 h-[2px] bg-neutral-800 rounded-full mt-4 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}