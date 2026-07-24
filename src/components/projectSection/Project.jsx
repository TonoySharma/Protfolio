'use client';

import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/react';

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
  {
    title: "SkillSphere",
    description: "An interactive skill-sharing platform enabling users to explore courses, manage learning paths, and connect with mentors seamlessly.",
    image: "/project-5.png",
    tags: ["Next.js", "MongoDB", "HeroUI", "Tailwind CSS"],
    liveLink: "https://skill-sphere-assignment-8.vercel.app/",
    githubLink: "https://github.com/TonoySharma/-SkillSphere--assignment-8",
  },
  {
    title: "Keep Keeper",
    description: "A lightweight, intuitive note-taking web application designed for organizing daily tasks, ideas, and priority lists effortlessly.",
    image: "/project-6.png",
    tags: ["React", "DaisyUI", "Tailwind CSS", "React Icons"],
    liveLink: "https://cheery-longma-bd48fb.netlify.app/",
    githubLink: "https://github.com/TonoySharma/assignment-7-keep-keeper",
  },
  {
    title: "Book Vibe",
    description: "A modern book discovery app allowing readers to browse categories, track reading lists, and view detailed reviews.",
    image: "/project-3.png",
    tags: ["React", "DaisyUI", "Tailwind CSS", "React Icons"],
    liveLink: "https://peaceful-sorbet-f2975e.netlify.app/",
    githubLink: "https://github.com/TonoySharma/Book-Vaibe",
  },
  {
    title: "DigiTools",
    description: "A comprehensive digital utility hub offering essential web tools with a sleek layout and fast client-side performance.",
    image: "/project-2.png",
    tags: ["React", "DaisyUI", "Tailwind CSS", "React Icons"],
    liveLink: "https://astonishing-hamster-37360d.netlify.app/",
    githubLink: "https://github.com/TonoySharma/assignment-6",
  },
  {
    title: "Job Application Portal",
    description: "A streamlined job portal helping applicants discover listings, filter vacancies, and track their application pipeline.",
    image: "/project-7.png",
    tags: ["React", "DaisyUI", "Tailwind CSS", "React Icons"],
    liveLink: "https://stellular-parfait-8138d1.netlify.app/",
    githubLink: "#",
  },
  {
    title: "World-on-the-Go",
    description: "An immersive travel directory presenting destination insights, itinerary guides, and dynamic filtering for travelers.",
    image: "/project-8.png",
    tags: ["React", "JavaScript (ES6)", "DaisyUI", "Tailwind CSS", "React Icons"],
    liveLink: "https://admirable-sfogliatella-0bac39.netlify.app/",
    githubLink: "https://github.com/TonoySharma/World-on-the-Go",
  },
  {
    title: "Dream 11 Cricket Team",
    description: "An engaging fantasy cricket manager where users can select players within a budget limit and assemble custom squad combinations.",
    image: "/project-9.png",
    tags: ["React", "DaisyUI", "Tailwind CSS", "React Icons"],
    liveLink: "https://bpl-dream-player-11.netlify.app/",
    githubLink: "https://github.com/TonoySharma/BPL-Dream",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const ProjectSection = () => {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculations
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  // Safe Page Change Function with Strict Boundaries
  const handlePageChange = (pageNumber) => {
 
    if (pageNumber < 1 || pageNumber > totalPages) return;

    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#030014] text-white py-24 px-6 lg:px-12 min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-violet-700/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header Section */}
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

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage} 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                <div className="h-full bg-[#161025]/50 backdrop-blur-sm rounded-3xl p-4 border border-white/5 transition-all duration-500 hover:bg-[#1c1432] hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] flex flex-col">

                  {/* Browser Mockup Header */}
                  <div className="flex items-center justify-between mb-5 px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500/80" />
                      <div className="w-3 h-3 rounded-full bg-sky-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-purple-500/70 to-transparent" />
                  </div>

                  {/* Image Container */}
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

                    {/* Action Links */}
                    <div className="mt-auto pt-4 flex items-center gap-5 border-t border-white/5">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold hover:text-purple-400 transition-colors uppercase tracking-widest hover:underline">
                        <ExternalLink size={14} /> Live view
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold hover:text-purple-400 transition-colors uppercase tracking-widest hover:underline">
                        <FaGithub size={14} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- PAGINATION CONTROLS --- */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-3">
            
            {/* Prev Button */}
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              isDisabled={currentPage === 1}
              className={`p-3 rounded-full bg-[#161025] border border-white/10 transition-all ${
                currentPage === 1
                  ? 'opacity-20 cursor-not-allowed border-white/5 pointer-events-none'
                  : 'hover:border-purple-500/50 cursor-pointer'
              }`}
            >
              <p className='flex gap-1 items-center'><ChevronLeft size={20} />Prev</p>
            </Button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-11 h-11 rounded-full text-sm font-bold transition-all cursor-pointer ${
                    currentPage === page
                      ? 'bg-blue-600 text-white scale-105 shadow-lg shadow-blue-500/30'
                      : 'bg-[#161025] border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/30'
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            {/* Next Button */}
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              isDisabled={currentPage === totalPages}
              className={`p-3 rounded-full bg-[#161025] border border-white/10 transition-all ${
                currentPage === totalPages
                  ? 'opacity-20 cursor-not-allowed border-white/5 pointer-events-none'
                  : 'hover:border-purple-500/50 cursor-pointer'
              }`}
            >
              <p className='flex gap-1 items-center'>Next<ChevronRight size={20} /></p>
            </Button>

          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectSection;