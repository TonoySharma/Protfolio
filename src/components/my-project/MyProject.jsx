'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
    {
      title: "DriveFleet (Car Rental)",
      description: "A full-stack vehicle booking platform featuring real-time vehicle availability, flexible reservation options, and backend API integration.",
      image: "/project-10.png",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "React Icons"],
      liveLink: "https://drive-fleet-five.vercel.app/",
      githubLink: "https://github.com/TonoySharma/DriveFleet",
    },
    {
      title: "Ebook Hub",
      description: "A digital book-sharing platform supporting server-side search, user uploading, and effortless ebook reading experience.",
      image: "/project-11.png",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "React Icons"],
      liveLink: "https://ebook-sharing-platform.vercel.app/",
      githubLink: "https://github.com/TonoySharma/ebook-sharing-platform",
    },
  
  {
    title: "Mobile Shop",
    description: "A feature-rich gadget marketplace featuring dynamic product browsing, server-side search, and secure OAuth authentication.",
    image: "/project-12.png",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "React Icons"],
    liveLink: "https://gadget-hub-theta.vercel.app/",
    githubLink: "https://github.com/TonoySharma/Gadget-Marketplace",
  },
  {
    title: "Fin Pulse AI",
    description: "An intuitive vehicle rental platform built with high-performance server-side filtering, seamless OAuth login, and responsive UI.",
    image: "/project-13.png",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "React Icons"],
    liveLink: "https://fin-pulse-ai-lac.vercel.app/",
    githubLink: "https://github.com/TonoySharma/Fin-Pulse-AI",
  },

];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ProjectSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#030014] text-white py-24 px-6 lg:px-12">

      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-violet-700/20 blur-[120px]" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header Section with Motion */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-xl font-light">
            Production-grade applications — full-stack architecture, polished UI, and real features.
          </p>
        </motion.div>

        {/* 4-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="h-full bg-[#161025]/50 backdrop-blur-sm rounded-3xl p-4 border border-white/5 transition-all duration-500 hover:bg-[#1c1432] hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] flex flex-col">

                {/* Browser Mockup Style */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-between mb-5 px-1"
                >
                  {/* Premium Window Dots */}
                  <div className="flex items-center gap-2">

                    {/* Purple */}
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-purple-500 blur-md opacity-70" />

                      <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 border border-white/20 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                    </motion.div>

                    {/* Blue */}
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.3,
                        repeat: Infinity,
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-sky-500 blur-md opacity-70" />

                      <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-sky-400 to-sky-700 border border-white/20 shadow-[0_0_12px_rgba(14,165,233,0.8)]" />
                    </motion.div>

                    {/* Green */}
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.6,
                        repeat: Infinity,
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-emerald-500 blur-md opacity-70" />

                      <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 border border-white/20 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                    </motion.div>
                  </div>

                  {/* Right Side Glow Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ duration: 1 }}
                    className="h-[2px] rounded-full bg-gradient-to-r from-purple-500/70 to-transparent"
                  />
                </motion.div>

                {/* Image Container with Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0718] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded-md text-purple-300 font-bold uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Links at the Bottom */}
                  <div className="mt-auto pt-4 flex items-center gap-5 border-t border-white/5">
                    <a href={project.liveLink} className="flex items-center gap-1.5 text-xs font-bold hover:text-purple-400 transition-colors uppercase tracking-widest hover:underline">
                      <ExternalLink size={14} /> Live view
                    </a>
                    <a href={project.githubLink} className="flex items-center gap-1.5 text-xs font-bold hover:text-purple-400 transition-colors uppercase tracking-widest hover:underline">
                      <FaGithub size={14} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;