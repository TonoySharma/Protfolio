"use client";
import React, { useState, useEffect } from "react";
import { Link } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi"; // 
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/TonoySharma", color: "hover:text-white" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/tonoysharma58/", color: "hover:text-blue-500" },
    { icon: <FaTwitter />, href: "#", color: "hover:text-sky-400" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/tonoy3858", color: "hover:text-blue-600" },
    { icon: <MdOutlineMailOutline />, href: "https://mail.google.com/mail/u/0/#inbox", color: "hover:text-blue-600" },
  ];

  return (
    <footer className="bg-[#05010d] pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1>
              <span className="text-3xl font-black tracking-tighter">
                <span className="text-white">T</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">ONOY</span>
              </span>
            </h1>
          </motion.div>

          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
            {["Services", "Project", "Experience", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <p
                  className="text-gray-400 hover:text-purple-400 font-medium transition-colors duration-300" >
                  {item}
                </p>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl text-white hover:border-purple-500/50 shadow-lg"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} All Rights Reserved by <span className="text-purple-500 font-semibold">Tonoy</span>
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <p className="hover:text-purple-500  transition-colors text-white">Privacy Policy</p>
            <p className="hover:text-purple-500 transition-colors text-white">Terms of Service</p>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all group"
          >
            <FiArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;