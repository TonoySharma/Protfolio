"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiGithub,
  SiDaisyui,
  SiNetlify,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { RiHtml5Fill, RiShieldKeyholeLine } from "react-icons/ri";

const skills = [
  {
    name: "React.js",
    level: "Advanced",
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    name: "Next.js",
    level: "Advanced",
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: <SiJavascript className="text-yellow-300" />,
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: <SiNodedotjs className="text-green-500" />,
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    icon: <SiMongodb className="text-green-400" />,
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    name: "Express.js",
    level: "Advanced",
    icon: <SiExpress className="text-white" />,
  },
  {
    name: "Better Auth",
    level: "Advanced",
    icon: <RiShieldKeyholeLine className="text-white" />,
  },
  {
    name: "HTML",
    level: "Advanced",
    icon: <RiHtml5Fill className="text-orange-500" />,
  },
  {
    name: "DaisyUI",
    level: "Intermediate",
    icon: <SiDaisyui className="text-pink-400" />,
  },
  {
    name: "HeroUI",
    level: "Intermediate",
    icon: <TbBrandVscode className="text-violet-400" />,
  },
  {
    name: "GitHub",
    level: "Advanced",
    icon: <SiGithub className="text-white" />,
  },
  {
    name: "Vercel",
    level: "Intermediate",
    icon: <SiVercel className="text-white" />,
  },
  {
    name: "Netlify",
    level: "Intermediate",
    icon: <SiNetlify className="text-cyan-400" />,
  },
];

const Technologies = () => {
  return (
    <section className="relative overflow-hidden bg-[#030014] py-30 px-4 sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-violet-700/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-violet-400 font-medium mb-4"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-violet-400" />
            Tech Stack
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed"
          >
            Modern technologies and tools I use to craft fast,
            scalable and interactive full-stack web applications.
          </motion.p>
        </div>

        {/* Skills Grid - Responsive 2 to 5 Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative"
            >
              {/* Card - Compact Padding & Rounded */}
              <div
                className="
                relative h-full overflow-hidden rounded-2xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-lg
                p-3.5 sm:p-4
                transition-all duration-300

                group-hover:border-violet-500/40
                group-hover:bg-white/[0.06]
                group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]
              "
              >
                {/* Top Glow */}
                <div className="absolute top-0 left-0 h-16 w-16 rounded-full bg-violet-500/10 blur-2xl" />

                {/* Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)] -translate-x-full group-hover:translate-x-full" />

                {/* Icon Box - Smaller Size */}
                <div className="relative mb-3 flex items-center justify-center">
                  <div
                    className="
                    flex h-12 w-12 sm:h-14 sm:w-14
                    items-center justify-center
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    text-2xl sm:text-3xl

                    transition-all duration-300

                    group-hover:bg-violet-500/10
                    group-hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]
                    group-hover:scale-105
                  "
                  >
                    {skill.icon}
                  </div>
                </div>

                {/* Content - Compact Typography */}
                <div className="text-center relative z-10">
                  <h3 className="text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 group-hover:text-violet-300">
                    {skill.name}
                  </h3>

                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    {skill.level}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;