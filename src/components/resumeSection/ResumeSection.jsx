"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";

const EducationSection = () => {
  const educationData = [
    {
      year: "2023 - 2024",
      title: "Higher Secondary Certificate",
      institution: "Ghatail Cantonment Public School & College",
      description: "Commerce background - GPA 4.84 / 5.00",
    },
    {
      year: "2022",
      title: "Secondary School Certificate",
      institution: "Ghatail Govt. Pilot High School",
      description: "Commerce background - GPA 4.14 / 5.00",
    },
    {
      year: "2026",
      title: "Full Stack Developer",
      institution: "Web Development Course With Programming Hero",
      description: "Foundational course in HTML, Tailwind CSS,Next js, React, MongoDB, and JavaScript.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  return (
    <section className="bg-[#05010d] py-24 px-6 md:px-12 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-4xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 mb-6 group transition-all duration-500 hover:scale-110">
            <GraduationCap className="text-purple-500 w-10 h-10 group-hover:rotate-12 transition-transform" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Education</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            My academic journey and professional certifications that shaped my career.
          </p>
        </motion.div>

        {/* Education Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative p-[1px] rounded-[32px] overflow-hidden transition-all duration-300"
            >
              {/* Border Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-8 rounded-[31px] bg-[#0f0715]/80 backdrop-blur-xl border border-white/5 flex flex-col justify-between group-hover:bg-[#140c1c] transition-all">
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-xs bg-purple-500/5 px-4 py-2 rounded-full border border-purple-500/10 w-fit">
                      <Calendar size={14} />
                      {item.year}
                    </div>
                    <FaUserGraduate className="text-purple-500/20 group-hover:text-purple-500/50 transition-colors w-8 h-8" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-start gap-2 text-gray-300 font-medium mb-4">
                    <MapPin size={16} className="text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm md:text-base">{item.institution}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed border-t border-white/5 pt-4 mt-auto">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSection;