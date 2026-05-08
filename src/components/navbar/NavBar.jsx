"use client";

import { useState, useEffect } from "react";
import { Link, Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdArrowRightAlt,
  MdOutlineLightMode,
  MdOutlineDarkMode,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] md:hidden overflow-hidden"
    >
      {/* Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
      />

      {/* Premium Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.35,
        }}
        className="absolute right-0 top-0 h-screen w-[82%] max-w-[320px] overflow-y-auto border-l border-white/10 bg-[#090411]/95 backdrop-blur-3xl"
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 h-60 w-60 bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-60 w-60 bg-blue-600/20 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col px-6 pt-24 pb-8">
          
          {/* Links */}
          <ul className="flex flex-col gap-6">
            {NavLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.08,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center justify-between rounded-xl border border-transparent bg-white/[0.03] px-4 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-purple-500/20 hover:bg-white/[0.06] hover:text-purple-400 no-underline hover:no-underline"
                >
                  <span>{link.name}</span>

                  <MdArrowRightAlt className="text-2xl opacity-0 translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Bottom Button */}
          <div className="mt-auto pt-10">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="no-underline hover:no-underline"
            >
              <Button className="group h-14 w-full rounded-2xl border border-purple-400/20 bg-gradient-to-r from-purple-600 to-blue-600 text-base font-bold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.03]">
                <span className="flex items-center gap-2">
                  Hire Me
                  <MdArrowRightAlt className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default NavBar;