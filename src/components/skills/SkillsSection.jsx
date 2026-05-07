"use client";


import React from "react";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiMongodb, SiTailwindcss, 
 SiVercel, SiJavascript, SiNodedotjs, SiReact, SiGithub, SiDaisyui,
  SiNetlify
} from "react-icons/si";


import { TbBrandVscode } from "react-icons/tb";
import { RiHtml5Fill } from "react-icons/ri";

const skills = [
    { name: "HTML", level: "ADVANCED", icon: <RiHtml5Fill className="text-blue-600" /> },
  { name: "React.js", level: "ADVANCED", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", level: "ADVANCED", icon: <SiNextdotjs className="text-white" /> },
  { name: "JavaScript", level: "ADVANCED", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Node.js", level: "INTERMEDIATE", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "MongoDB", level: "INTERMEDIATE", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Tailwind CSS", level: "ADVANCED", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "DaisyUI", level: "INTERMEDIATE", icon: <SiDaisyui className="text-[#FF9900]" /> },
  { name: "HeroUI", level: "INTERMEDIATE", icon: <TbBrandVscode className="text-[#8B5CF6]" /> },
  { name: "Git / GitHub", level: "ADVANCED", icon: <SiGithub className="text-white" /> },
  { name: "Vercel", level: "INTERMEDIATE", icon: <SiVercel className="text-white" /> },
  { name: "Netlify", level: "INTERMEDIATE", icon: <SiNetlify  className="text-[#28c2ff]" /> },
];

const SkillsPage = () => {
  return (
    <section className="bg-[#05010d] py-20 px-6 relative overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <p className="text-purple-500 font-mono tracking-[0.3em] uppercase text-xs mb-2">Tech Stack</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-lg">The tools I use to build modern, scalable full-stack applications.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20">
                
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl shadow-xl transition-transform group-hover:scale-110 duration-500">
                  {skill.icon}
                </div>

                {/* Skill Info */}
                <h3 className="text-white font-bold text-lg mb-2">{skill.name}</h3>
                
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-500 group-hover:text-purple-400 transition-colors uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  {skill.level}
                </div>

                {/* Bottom Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;