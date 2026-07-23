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
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { RiHtml5Fill } from "react-icons/ri";

const skills = [
  {
    name: "HTML",
    level: "Advanced",
    icon: <RiHtml5Fill className="text-orange-500" />,
  },
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
    <section className="relative overflow-hidden bg-[#030014] py-20 px-4 sm:px-6 lg:px-8">

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
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-violet-400 font-medium mb-5"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-violet-400" />
            Tech Stack
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
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
            className="mt-5 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Modern technologies and tools I use to craft fast,
            scalable and interactive full-stack web applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="
                relative h-full overflow-hidden rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-5 sm:p-7
                transition-all duration-500

                group-hover:border-violet-500/40
                group-hover:bg-white/[0.06]
                group-hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]
              "
              >

                {/* Top Glow */}
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />

                {/* Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.04),transparent)] -translate-x-full group-hover:translate-x-full" />

                {/* Icon */}
                <div className="relative mb-5 flex items-center justify-center">
                  <div
                    className="
                    flex h-16 w-16 sm:h-20 sm:w-20
                    items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    text-3xl sm:text-4xl

                    transition-all duration-500

                    group-hover:bg-violet-500/10
                    group-hover:shadow-[0_0_25px_rgba(139,92,246,0.28)]
                    group-hover:scale-110
                  "
                  >
                    {skill.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-white text-sm sm:text-lg font-semibold tracking-wide transition-colors duration-300 group-hover:text-violet-300">
                    {skill.name}
                  </h3>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-300">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
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