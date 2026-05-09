"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [mouseX, setMouseX] = useState(50);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMouseX(((e.clientX - rect.left) / rect.width) * 100);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const NavLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes goldPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes shimmerFlow {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .tnav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ffd700, transparent);
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .tnav-link:hover::after,
        .tnav-link.active::after { width: 100%; }
        .tnav-link:hover { color: #ffd700 !important; }

        .t-hirebtn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .t-hirebtn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, #b8860b 0%, #ffd700 40%, #f0d080 55%, #b8860b 80%, #ffd700 100%);
          background-size: 200% auto;
          animation: shimmerFlow 2.5s linear infinite;
        }
        .t-hirebtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(184,134,11,0.5) !important;
        }
        .t-hirebtn:active { transform: translateY(0); }

        @media (min-width: 768px) {
          .tmd-flex { display: flex !important; }
          .tmd-block { display: block !important; }
          .tmob-only { display: none !important; }
        }
      `}</style>

      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
          padding: scrolled ? "8px 0" : "20px 0",
          background: scrolled ? "rgba(5,3,10,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184,134,11,0.1)" : "none",
        }}
      >
        {/* Mouse-following gold ray */}
        {scrolled && (
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `radial-gradient(ellipse 320px 80px at ${mouseX}% 120%, rgba(184,134,11,0.09) 0%, transparent 70%)`,
            transition: "background 0.08s linear",
          }} />
        )}

        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>

          {/* ── LOGO ── */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>

              {/* Ornament wheel */}
              <div style={{ position: "relative", width: "36px", height: "36px", flexShrink: 0 }}>
                <svg
                  width="36" height="36" viewBox="0 0 36 36"
                  style={{ animation: "rotateSlow 14s linear infinite", position: "absolute", inset: 0 }}
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={i}
                      x1="18" y1="3.5" x2="18" y2="8.5"
                      stroke="#c9963a" strokeWidth="1.4" strokeLinecap="round"
                      transform={`rotate(${i * 45} 18 18)`}
                      opacity="0.8"
                    />
                  ))}
                  <circle cx="18" cy="18" r="10" fill="none" stroke="#c9963a" strokeWidth="0.5" opacity="0.4" />
                  <circle cx="18" cy="18" r="6" fill="none" stroke="#f0d080" strokeWidth="0.7" opacity="0.5" />
                </svg>
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{
                    width: "6px", height: "6px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #ffd700, #c9963a)",
                    animation: "goldPulse 2.5s ease-in-out infinite",
                  }} />
                </div>
              </div>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <ul
            className="tmd-flex"
            style={{
              display: "none",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {NavLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} style={{ textDecoration: "none" }}
                  onClick={() => setActiveLink(link.name)}>
                  <span
                    className={`tnav-link${activeLink === link.name ? " active" : ""}`}
                    style={{
                      position: "relative",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "13px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: activeLink === link.name ? "#ffd700" : "rgba(255,255,255,0.45)",
                      transition: "color 0.3s",
                      cursor: "pointer",
                    }}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* ── DESKTOP CTA ── */}
          <div className="tmd-flex" style={{ display: "none", alignItems: "center", gap: "16px" }}>
            {/* Availability dot */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px rgba(74,222,128,0.6)",
                animation: "goldPulse 2s ease-in-out infinite",
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.06em",
              }}>Available</span>
            </div>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button
                className="t-hirebtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "0 26px",
                  height: "42px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 24px rgba(184,134,11,0.28)",
                }}
              >
                <span style={{
                  position: "relative", zIndex: 1,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#09070f",
                }}>Hire Me</span>
                <MdArrowRightAlt style={{
                  position: "relative", zIndex: 1,
                  fontSize: "17px",
                  color: "#09070f",
                }} />
              </button>
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            className="tmob-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              zIndex: 60,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block",
                height: "1.5px",
                width: i === 1 ? (isMenuOpen ? "24px" : "16px") : "24px",
                background: isMenuOpen ? "#ffd700" : "rgba(255,255,255,0.7)",
                borderRadius: "2px",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                transform: isMenuOpen
                  ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                      : "scaleX(0)"
                  : "none",
                opacity: isMenuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* ── MOBILE DRAWER ── */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  position: "fixed", inset: 0, zIndex: 40,
                  background: "rgba(0,0,0,0.8)",
                  backdropFilter: "blur(8px)",
                }}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 220 }}
                style={{
                  position: "fixed",
                  top: 0, left: 0,
                  zIndex: 50,
                  height: "100%",
                  width: "78%",
                  maxWidth: "300px",
                  background: "#05030a",
                  borderRight: "1px solid rgba(184,134,11,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2.5rem 2rem",
                }}
              >
                {/* Top gold line */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #c9963a 25%, #ffd700 50%, #c9963a 75%, transparent)",
                }} />

                {/* Logo */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700, fontSize: "28px", color: "#fff",
                    }}>T</span>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 700, fontSize: "28px",
                      background: "linear-gradient(90deg, #c9963a, #ffd700, #c9963a)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>ONOY</span>
                  </div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "8px", letterSpacing: "0.35em",
                    color: "#c9963a", opacity: 0.6,
                    textTransform: "uppercase",
                    margin: "2px 0 0 2px",
                  }}>Portfolio</p>
                </div>

                <div style={{ height: "1px", background: "rgba(184,134,11,0.1)", marginBottom: "2rem" }} />

                {/* Nav links */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                  {NavLinks.map((link, index) => (
                    <motion.li key={link.name}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.07 * index, type: "spring", stiffness: 280 }}
                    >
                      <Link href={link.href} onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none" }}>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "15px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.04)",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                          onMouseEnter={e => {
                            e.currentTarget.style.paddingLeft = "6px";
                            e.currentTarget.querySelector(".mtext").style.color = "#ffd700";
                            e.currentTarget.querySelector(".marrow").style.opacity = "1";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.paddingLeft = "0";
                            e.currentTarget.querySelector(".mtext").style.color = "rgba(255,255,255,0.5)";
                            e.currentTarget.querySelector(".marrow").style.opacity = "0";
                          }}
                        >
                          <span className="mtext" style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 600, fontSize: "22px",
                            color: "rgba(255,255,255,0.5)",
                            transition: "color 0.3s",
                            letterSpacing: "0.02em",
                          }}>{link.name}</span>
                          <MdArrowRightAlt className="marrow" style={{
                            fontSize: "18px", color: "#ffd700",
                            opacity: 0, transition: "opacity 0.3s",
                          }} />
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Drawer CTA */}
                <div style={{ paddingBottom: "0.5rem" }}>
                  {/* Availability */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
                    <div style={{
                      width: "6px", height: "6px",
                      borderRadius: "50%",
                      background: "#4ade80",
                      boxShadow: "0 0 6px rgba(74,222,128,0.5)",
                    }} />
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.08em",
                    }}>Available for freelance</span>
                  </div>

                  <Link href="/contact" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none", display: "block" }}>
                    <button className="t-hirebtn" style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      width: "auto",           
                      paddingLeft: "24px",     
                      paddingRight: "24px",
                      height: "50px",
                      borderRadius: "12px",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 6px 28px rgba(184,134,11,0.3)",
                    }}>
                      <span style={{
                        position: "relative", zIndex: 1,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500, fontSize: "12px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#09070f",
                      }}>Hire Me</span>
                      <MdArrowRightAlt style={{ position: "relative", zIndex: 1, fontSize: "18px", color: "#09070f" }} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;