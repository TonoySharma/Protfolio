"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
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
      year: "2017 - 2022",
      title: "Secondary School Certificate",
      institution: "Ghatail Govt. Pilot High School",
      description: "Commerce background - GPA 4.14 / 5.00",
    },
    {
      year: "2026",
      title: "Full Stack Developer",
      institution: "Web Development Course With Programming Hero",
      description:
        "Foundational course in HTML, Tailwind CSS, Next.js, React, MongoDB, and JavaScript.",
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
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#030014] py-24 px-6 md:px-12 min-h-screen flex items-center">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] h-[350px] w-[350px] rounded-full bg-violet-700/20 blur-[120px]" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

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
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Education
            </span>
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed">
            My academic journey and professional certifications
            that shaped my career.
          </p>
        </motion.div>

        {/* Education Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Hover Glow Border */}
              <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-violet-500/30 to-cyan-500/30 opacity-0 blur transition duration-500 group-hover:opacity-100" />

              {/* Card */}
              <div
                className="
                relative h-full overflow-hidden rounded-[32px]
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-8
                transition-all duration-500

                group-hover:border-violet-500/40
                group-hover:bg-white/[0.06]
                group-hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]
              "
              >
                
                {/* Top Glow */}
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />

                {/* Hover Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.04),transparent)] -translate-x-full group-hover:translate-x-full" />

                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Top */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-violet-300 font-semibold text-xs bg-violet-500/10 px-4 py-2 rounded-full border border-violet-500/20 w-fit">
                        <Calendar size={14} />
                        {item.year}
                      </div>

                      <FaUserGraduate className="text-violet-500/20 group-hover:text-violet-400/60 transition-colors duration-500 w-8 h-8" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight transition-colors duration-300 group-hover:text-violet-300">
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-start gap-2 text-gray-300 font-medium mb-5">
                      <MapPin
                        size={16}
                        className="text-violet-400 mt-1 shrink-0"
                      />

                      <span className="text-sm md:text-base">
                        {item.institution}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-5 mt-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;