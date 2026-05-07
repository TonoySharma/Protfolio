"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSectionPage = () => {
  const stats = [
    { label: "Years of Experience", value: "1" },
    { label: "Projects Completed", value: "14+" },
    { label: "GitHub Repos", value: "20+" },
    { label: "Technologies", value: "10+" },
  ];

  return (
    <section className="bg-[#05010d] py-40 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image/Visual Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative w-full aspect-square max-w-[450px] mx-auto rounded-[20px] overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
           
              <img 
                src="tonoy.png" 
                alt="Tonoy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05010d] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -right-2 md:right-10 bg-[#140c1c]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl shadow-black/50"
            >
              <h3 className="text-4xl font-bold text-white">01</h3>
              <p className="text-gray-400 text-sm">Year of <br /> Experience</p>
            </motion.div>
          </motion.div>

          {/* Right: Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-purple-500 font-mono tracking-widest uppercase text-sm mb-4">Who I Am</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Tonoy</span>, a Frontend Web Developer
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I specialize in building high-performance, interactive, and visually stunning web applications. 
              My journey as a frontend developer is driven by a deep love for clean code and user-centric design. 
              I don&apos;t just build websites; I craft experiences that engage and inspire.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((item, index) => (
                <div key={index} className="border-l-2 border-purple-500/30 pl-6">
                  <h4 className="text-3xl font-bold text-white mb-1">{item.value}</h4>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionPage;