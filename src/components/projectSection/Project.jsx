'use client'; // Framer motion use korle Next.js e oboshshoi client component hote hobe

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Tiles Gallery",
    description: "Premium tile browsing platform with server-side search and OAuth.",
    image: "/project-5.png",
    tags: ["NEXT.JS 15", "MONGODB", "HEROUI"],
    liveLink: "#",
    githubLink: "#",
    urlBar: "tiles-gallery.vercel.app"
  },
  {
    title: "Tiles Gallery",
    description: "Premium tile browsing platform with server-side search and OAuth.",
    image: "/project-6.png",
    tags: ["NEXT.JS 15", "MONGODB", "HEROUI"],
    liveLink: "#",
    githubLink: "#",
    urlBar: "tiles-gallery.vercel.app"
  },
  {
    title: "Tiles Gallery",
    description: "Premium tile browsing platform with server-side search and OAuth.",
    image: "/project-3.png",
    tags: ["NEXT.JS 15", "MONGODB", "HEROUI"],
    liveLink: "#",
    githubLink: "#",
    urlBar: "tiles-gallery.vercel.app"
  },
  {
    title: "Tiles Gallery",
    description: "Premium tile browsing platform with server-side search and OAuth.",
    image: "/project-2.png",
    tags: ["NEXT.JS 15", "MONGODB", "HEROUI"],
    liveLink: "#",
    githubLink: "#",
    urlBar: "tiles-gallery.vercel.app"
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
    <section className="bg-[#0b0718] text-white py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group relative"
            >
              <div className="h-full bg-[#161025]/50 backdrop-blur-sm rounded-3xl p-4 border border-white/5 transition-all duration-500 hover:bg-[#1c1432] hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] flex flex-col">
                
                {/* Browser Mockup Style */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="text-[9px] text-gray-500 font-mono bg-black/20 px-2 py-0.5 rounded border border-white/5 truncate max-w-[120px]">
                    {project.urlBar || 'localhost:3000'}
                  </div>
                </div>

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
                    {project.tags.slice(0, 3).map((tag, i) => (
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
                    <a href={project.liveLink} className="flex items-center gap-1.5 text-xs font-bold hover:text-purple-400 transition-colors uppercase tracking-widest">
                      <ExternalLink size={14} /> Live view
                    </a>
                    <a href={project.githubLink} className="flex items-center gap-1.5 text-xs font-bold hover:text-purple-400 transition-colors uppercase tracking-widest">
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