"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Banner() {
  return (
    <main className="min-h-screen bg-[#030014] text-white flex items-center justify-center pt-20 md:pt-24 px-6 md:px-12 lg:px-24 pb-12 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Big Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[28vw] font-black text-white">HI</h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto w-full">

        {/* LEFT SIDE */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">

          <h2 className="text-lg md:text-xl font-semibold text-violet-300 tracking-widest uppercase">
            Hello, I’m Tonoy
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Frontend Web Developer
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            I specialize in building high-performance, interactive, and visually stunning web applications with modern technologies and clean UI systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-6">

            <a
              href="#"
              className="flex items-center gap-3 px-7 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-violet-200 font-semibold hover:bg-white/10 hover:border-violet-500/40 transition-all duration-300"
            >
              Download CV <FaDownload />
            </a>

            <div className="flex items-center gap-4">

              {[
                { icon: <MdOutlineMailOutline />, href: "https://mail.google.com/mail/u/0/#inbox" },
                { icon: <SiFacebook />, href: "https://www.facebook.com/tonoy3858" },
                { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/tonoysharma58/" },
                { icon: <FaGithub />, href: "https://github.com/TonoySharma" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-xl hover:bg-violet-500/10 hover:border-violet-500/40 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}

            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Sudhu Image Component update kora hoyeche) */}
        <div className="flex items-center justify-center lg:justify-end relative">
          
          {/* Main Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Pulsing Gradient Backglow */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[110%] h-[110%] bg-gradient-to-tr from-violet-600 to-cyan-400 blur-3xl rounded-full opacity-60"
            />

            {/* Circular Border & Image */}
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full p-[2px] bg-gradient-to-tr from-violet-500 via-cyan-400 to-blue-500 shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]">
              
              {/* Spinning Overlay Ring (Cyber Effect) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] rounded-full border-2 border-dashed border-violet-500/30 pointer-events-none"
              />

              <div className="w-full h-full rounded-full overflow-hidden bg-[#030014] relative">
                {/* Final Image Component */}
                <Image
                  src="/tonoy.png"
                  alt="Tonoy"
                  fill
                  className="object-cover object-top scale-105"
                  priority
                />
                
                {/* Subtle Inner Overlay for blend */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-violet-900/30" />
              </div>
            </div>

            {/* Outer Static Ring */}
            <div className="absolute inset-[-20px] rounded-full border border-violet-500/10 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </main>
  );
}