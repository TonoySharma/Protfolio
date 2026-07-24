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

const statsData = [
  { value: 1, label: "Years of", subLabel: "Experience" },
  { value: 20, label: "Projects", subLabel: "Completed" },
  { value: 30, label: "GitHub", subLabel: "Repositories" },
  { value: 10, label: "Mastered", subLabel: "Technologies" },
];

const Counting = () => {
  return (
    <section className="relative bg-[#05010d] py-24 overflow-hidden border-t border-b border-white/5">
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[450px] h-[450px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-purple-400 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            MILESTONES & NUMBERS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Milestones That Define My <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Development Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-400 text-sm md:text-base"
          >
            A quick glance at the numbers behind my work, experience, and open-source contributions.
          </motion.p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-5xl mx-auto items-center">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                <Counter value={item.value} />+
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-tight uppercase tracking-widest font-medium">
                {item.label} <br /> {item.subLabel}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Counting;