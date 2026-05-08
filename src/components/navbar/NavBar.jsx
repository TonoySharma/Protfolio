"use client";

import { useState, useEffect } from "react";
import { Link, Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdArrowRightAlt,
} from "react-icons/md";
import { useTheme } from "next-themes";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0715]/80 backdrop-blur-xl border-b border-purple-500/20 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12">
        
        {/* Logo */}
        <Link
          href="/"
          className="no-underline hover:no-underline flex items-center"
        >
          <span className="text-xl sm:text-2xl font-black tracking-tighter">
            <span className="text-white hover:text-purple-500 transition-colors">
              T
            </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              ONOY
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative text-sm lg:text-[15px] font-medium text-gray-300 hover:text-purple-400 transition-all no-underline hover:no-underline group"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {/* CTA */}
          <Link
            href="/contact"
            className="no-underline hover:no-underline"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full px-6 lg:px-8 h-11 hover:scale-105 transition-all">
              Hire Me
              <MdArrowRightAlt className="text-xl" />
            </Button>
          </Link>
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-3 md:hidden">
        

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex flex-col gap-[5px]"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }}    
              exit={{ x: "-100%" }}    
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 z-50 h-full w-[80%] max-w-[300px] bg-[#0f0715] border-r border-purple-500/20 p-8 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Logo in Menu */}
                <div className="mb-12">
                  <span className="text-2xl font-black tracking-tighter">
                    <span className="text-white">T</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">ONOY</span>
                  </span>
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-6">
                  {NavLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl font-medium text-gray-300 hover:text-purple-400 transition-colors no-underline"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

           
                <div className="mt-auto pb-10">
                  <Link 
                    href="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="no-underline w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl h-12">
                      Hire Me
                      <MdArrowRightAlt className="text-xl" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </nav>

  );
};

export default NavBar;