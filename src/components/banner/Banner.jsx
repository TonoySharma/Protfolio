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

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center md:justify-end">
          <motion.div
            className="relative w-[300px] h-[360px] md:w-[360px] md:h-[420px] rounded-[30px] p-[2px] bg-gradient-to-br from-violet-500/40 to-cyan-500/30 shadow-2xl"
            initial={{ rotate: 8, scale: 0.95 }}
            whileHover={{
              rotate: 0,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 15,
            }}
          >
            <div className="w-full h-full rounded-[28px] overflow-hidden bg-[#030014]">

              <Image
                src="/tonoy.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500 border-2 border-purple-500 rounded"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}