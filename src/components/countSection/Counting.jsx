"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useInView } from "framer-motion";

// কাউন্টার লজিক কম্পোনেন্ট
function Counter({ value, isDecimal = false }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // যখন স্ক্রিনে আসবে তখনই শুরু হবে

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
      // যদি দশমিক সংখ্যা হয় (যেমন ১.৫) তবেtoFixed ব্যবহার করবে, নাহলে রাউন্ড করবে
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
    <section className="bg-[#0f0715] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-5xl mx-auto items-center">
          
          {/* ১. Years of Experience */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
              <Counter value={1} />
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-tight uppercase tracking-widest font-medium">
              Years of <br /> Experience
            </p>
          </div>

          {/* ২. Project Completed */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
              <Counter value={15} />+
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-tight uppercase tracking-widest font-medium">
              Projects <br /> Completed
            </p>
          </div>

          {/* ৩. Happy Clients */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
              <Counter value={20}/>+
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-tight uppercase tracking-widest font-medium">
              GitHub Repos
            </p>
          </div>

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