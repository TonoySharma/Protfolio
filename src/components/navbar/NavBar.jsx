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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-[#0f0715]/80 backdrop-blur-md border-b border-purple-500/20 py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Link href="/" className="no-underline hover:no-underline">
            <span className="text-2xl font-black tracking-tighter">
              <span className="text-white group-hover:text-purple-500">
                T
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-400">
                ONOY
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="no-underline hover:no-underline text-[15px] font-medium text-gray-300 hover:text-purple-400 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden items-center gap-5 md:flex">
          <Link href="/contact" className="no-underline hover:no-underline">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full px-8 hover:scale-105 transition-transform">
              Hire Me <MdArrowRightAlt className="mt-2" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">

          <button
            className="flex flex-col gap-[5px] z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            ></span>
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
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Background Blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 120, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative ml-auto h-full w-[80%] max-w-sm bg-gradient-to-b from-[#0f0715]/95 to-black/95 backdrop-blur-2xl p-8 pt-24 border-l border-purple-500/20 flex flex-col"
            >
              {/* Nav Links */}
              <ul className="flex flex-col gap-6">
                {NavLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between text-2xl font-semibold text-white hover:text-purple-400 transition-all"
                    >
                      {link.name}

                      {/* Arrow hover animation */}
                      <MdArrowRightAlt className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mt-2" />
                    </Link>

                    {/* Underline glow */}
                    <span className="block h-[1px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all mt-1"></span>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom CTA */}
              <div className="mt-auto flex flex-col gap-4">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-6 text-lg rounded-xl shadow-lg shadow-purple-500/20 hover:scale-105 transition-all items-center">
                    Hire Me <MdArrowRightAlt className="mt-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;