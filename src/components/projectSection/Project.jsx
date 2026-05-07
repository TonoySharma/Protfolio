"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Design", "Full Stack", "React"];

  const projectData = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "#",
      github: "#",
      description: "A premium dashboard with real-time data visualization."
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "React",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      link: "#",
      github: "#",
      description: "Modern portfolio with framer motion and dark theme."
    },
    {
      id: 3,
      title: "Agency Landing Page",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop",
      link: "#",
      github: "#",
      description: "Clean and minimalist landing page for digital agencies."
    },
  ];

  const filteredProjects = filter === "All" 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <section className="bg-[#05010d] min-h-screen py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-6"
          >
            My Recent Works
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We put your ideas and thus your wishes in the focus of our experienced 
            and skilled development team.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 border ${
                filter === cat 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent" 
                  : "bg-[#140c1c] text-gray-400 border-white/5 hover:border-purple-500/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#140c1c] rounded-[32px] overflow-hidden border border-white/5"
              >
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05010d] via-[#05010d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <p className="text-purple-400 font-mono text-sm mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <div className="flex gap-4">
                    <a href={project.github} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                      <FiGithub size={20} />
                    </a>
                    <a href={project.link} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Bottom Title (Static) */}
                <div className="p-6 group-hover:opacity-0 transition-opacity">
                   <h3 className="text-xl font-bold text-white">{project.title}</h3>
                   <p className="text-gray-500 text-sm mt-1">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;