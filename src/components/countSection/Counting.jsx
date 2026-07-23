"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useInView } from "framer-motion";

function Counter({ value, isDecimal = false }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (isDecimal) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Math.floor(latest));
      }
    });
  }, [springValue, isDecimal]);

  return <span ref={ref}>{displayValue}</span>;
}

const Counting = () => {
  return (
    <section className="relative bg-[#05010d] py-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[450px] h-[450px] bg-purple-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] bg-blue-600/20 blur-[140px] rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-5xl mx-auto items-center">

          {/* ১. Years of Experience */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
              <Counter value={1} />+
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-tight uppercase tracking-widest font-medium">
              Years of <br /> Experience
            </p>
          </div>

          {/* ২. Project Completed */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
              <Counter value={20} />+
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-tight uppercase tracking-widest font-medium">
              Projects <br /> Completed
            </p>
          </div>

          {/* ৩. GitHub Repos */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
              <Counter value={30} />+
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-tight uppercase tracking-widest font-medium">
              GitHub Repos
            </p>
          </div>

          {/* ৪. Technologies */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
              <Counter value={10} />+
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-tight uppercase tracking-widest font-medium">
              Technologies
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Counting;