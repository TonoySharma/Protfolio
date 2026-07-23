"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSectionPage = () => {
  const stats = [
    { label: "Years of Experience", value: "1+" },
    { label: "Projects Completed", value: "20+" },
    { label: "GitHub Repos", value: "30+" },
    { label: "Technologies", value: "10+" },
  ];

  return (
  
    <section className="relative bg-[#05010d] py-20 md:py-40 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 blur-[140px] rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Existing Blur */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-600/10 blur-[100px] md:blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 blur-[100px] md:blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group order-2 lg:order-1" 
          >
            <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[450px] mx-auto rounded-[20px] overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
              <img 
                src="tonoy.png" 
                alt="Tonoy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05010d] via-transparent to-transparent opacity-60" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-4 -right-2 md:right-10 bg-[#140c1c]/90 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl md:text-4xl font-bold text-white">1+</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Year of <br /> Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-purple-500 font-mono tracking-widest uppercase text-xs md:text-sm mb-4">
              Who I Am
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Tonoy
              </span>
              , a Frontend Web Developer
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              I specialize in building high-performance, interactive, and visually stunning web applications.
              My journey as a frontend developer is driven by a deep love for clean code and user-centric design.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10">
              {stats.map((item, index) => (
                <div key={index} className="border-l-2 border-purple-500/30 pl-4 md:pl-6">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {item.value}
                  </h4>
                  <p className="text-gray-500 text-[10px] md:text-sm uppercase tracking-wider">
                    {item.label}
                  </p>
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