"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
});

const contactItems = [
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+880 1793948085",
    href: "tel:+8801793948085",
  },
  {
    icon: <FiMail />,
    label: "Email",
    value: "tonoysharma58@gmail.com",
    href: "mailto:tonoysharma58@gmail.com",
  },
  {
    icon: <FiMapPin />,
    label: "Address",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

const ContactSectionPage = () => {
  const [focused, setFocused] = useState(null);
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes shimmerFlow {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseGold {
          0%,100% { box-shadow: 0 0 0 0 rgba(201,150,58,0.0); }
          50%      { box-shadow: 0 0 0 8px rgba(201,150,58,0.12); }
        }
        @keyframes gridFloat {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-6px); }
        }

        .gold-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(184,134,11,0.15);
          border-radius: 12px;
          padding: 14px 18px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
          box-sizing: border-box;
        }
        .gold-input::placeholder { color: rgba(255,255,255,0.2); }
        .gold-input:focus {
          border-color: rgba(255,215,0,0.5);
          background: rgba(255,215,0,0.03);
          box-shadow: 0 0 0 3px rgba(201,150,58,0.08);
        }
        .gold-input option { background: #0a0805; color: #fff; }

        .send-btn {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 36px;
          height: 52px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #09070f;
          transition: transform 0.2s, box-shadow 0.3s;
        }
        .send-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, #b8860b 0%, #ffd700 40%, #fff8dc 55%, #ffd700 70%, #b8860b 100%);
          background-size: 200% auto;
          animation: shimmerFlow 2.5s linear infinite;
        }
        .send-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(184,134,11,0.45); }
        .send-btn:active { transform: translateY(0); }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          border-radius: 16px;
          border: 1px solid rgba(184,134,11,0.1);
          background: rgba(255,255,255,0.02);
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          cursor: default;
        }
        .contact-card:hover {
          border-color: rgba(255,215,0,0.25);
          background: rgba(255,215,0,0.03);
          transform: translateX(6px);
        }
      `}</style>

      <section style={{
        position: "relative",
        overflow: "hidden",
        background: "#05030a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 24px",
        fontFamily: "'DM Sans', sans-serif",
      }}>

        {/* ── Background ornaments ── */}
        {/* Top-left gold glow */}
        <div style={{
          position: "absolute", top: "-8%", left: "-8%",
          width: "420px", height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,134,11,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}/>
        {/* Bottom-right gold glow */}
        <div style={{
          position: "absolute", bottom: "-8%", right: "-8%",
          width: "380px", height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,150,58,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}/>

        {/* Fine gold grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(184,134,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,134,11,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}/>

        {/* Spinning ornament top-center */}
        <div style={{
          position: "absolute", top: "5%", left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none", opacity: 0.25,
        }}>
          <svg width="60" height="60" viewBox="0 0 60 60"
            style={{ animation: "rotateSlow 18s linear infinite" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={i} x1="30" y1="6" x2="30" y2="14"
                stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round"
                transform={`rotate(${i * 45} 30 30)`}/>
            ))}
            <circle cx="30" cy="30" r="16" fill="none" stroke="#c9963a" strokeWidth="0.6"/>
            <circle cx="30" cy="30" r="10" fill="none" stroke="#ffd700" strokeWidth="0.4"/>
          </svg>
        </div>

        {/* ── Main grid ── */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
          gap: "48px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}>

          {/* ════ LEFT — Form ════ */}
          <motion.div
            {...fadeUp(0)}
            style={{
              background: "rgba(255,255,255,0.025)",
              backdropFilter: "blur(24px)",
              borderRadius: "28px",
              border: "1px solid rgba(184,134,11,0.15)",
              padding: "clamp(28px, 5vw, 48px)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,215,0,0.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Card inner top gold line */}
            <div style={{
              position: "absolute", top: 0, left: "10%", right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
              opacity: 0.4,
            }}/>

            {/* Section label */}
            <motion.div {...fadeUp(0.05)} style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "5px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(184,134,11,0.25)",
              background: "rgba(184,134,11,0.07)",
              marginBottom: "20px",
            }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#ffd700" }}/>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9963a",
              }}>Get in touch</span>
            </motion.div>

            <motion.h2 {...fadeUp(0.1)} style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 46px)",
              lineHeight: 1.1,
              marginBottom: "12px",
              background: "linear-gradient(90deg, #c9963a 0%, #ffd700 40%, #fff8dc 60%, #ffd700 80%, #c9963a 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmerFlow 5s linear infinite",
            }}>
              Let&apos;s work<br/>together.
            </motion.h2>

            <motion.p {...fadeUp(0.15)} style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.7,
              marginBottom: "32px",
              maxWidth: "380px",
            }}>
              I design and build beautifully simple things — and I love what I do.
              Just as simple as that.
            </motion.p>

            {/* Form */}
            <form style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              onSubmit={e => e.preventDefault()}>

              <motion.div {...fadeUp(0.2)} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input className="gold-input" type="text" placeholder="First name"/>
                <input className="gold-input" type="text" placeholder="Last name"/>
              </motion.div>

              <motion.div {...fadeUp(0.25)} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input className="gold-input" type="email" placeholder="Email address"/>
                <input className="gold-input" type="tel" placeholder="Phone number"/>
              </motion.div>

              <motion.div {...fadeUp(0.3)}>
                <select className="gold-input" style={{ appearance: "none", cursor: "pointer", color: "rgba(255,255,255,0.35)" }}>
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>UI / UX Design</option>
                  <option>Full Stack Project</option>
                </select>
              </motion.div>

              <motion.div {...fadeUp(0.35)}>
                <textarea
                  className="gold-input"
                  rows={5}
                  placeholder="Your message…"
                  style={{ resize: "none" }}
                />
              </motion.div>

              <motion.div {...fadeUp(0.4)}>
                <button type="submit" className="send-btn">
                  <span style={{ position: "relative", zIndex: 1 }}>Send Message</span>
                  <FiArrowRight style={{ position: "relative", zIndex: 1, fontSize: "16px" }}/>
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* ════ RIGHT — Contact info ════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Heading */}
            <motion.div {...fadeUp(0.1)} style={{ marginBottom: "16px" }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9963a",
                opacity: 0.7,
                marginBottom: "8px",
              }}>Contact details</p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: "clamp(22px, 3vw, 30px)",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.2,
              }}>Reach out anytime —<br/>
                <span style={{
                  background: "linear-gradient(90deg, #c9963a, #ffd700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>I'm always open.</span>
              </h3>
            </motion.div>

            {contactItems.map(({ icon, label, value, href }, i) => (
              <motion.div key={label} {...fadeUp(0.15 + i * 0.1)}>
                <a
                  href={href || undefined}
                  className="contact-card"
                  style={{ textDecoration: "none", display: "flex" }}
                >
                  {/* Icon orb */}
                  <div style={{
                    flexShrink: 0,
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "rgba(184,134,11,0.08)",
                    border: "1px solid rgba(184,134,11,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    color: "#ffd700",
                    animation: "pulseGold 3s ease-in-out infinite",
                    animationDelay: `${i * 0.8}s`,
                  }}>
                    {icon}
                  </div>

                  <div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.25)",
                      marginBottom: "4px",
                    }}>{label}</p>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.3,
                    }}>{value}</p>
                  </div>

                  {/* Arrow hint for links */}
                  {href && (
                    <FiArrowRight style={{
                      marginLeft: "auto",
                      fontSize: "16px",
                      color: "rgba(255,215,0,0.3)",
                      flexShrink: 0,
                    }}/>
                  )}
                </a>
              </motion.div>
            ))}

            {/* Bottom ornament divider */}
            <motion.div {...fadeUp(0.45)} style={{
              marginTop: "12px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(184,134,11,0.25), transparent)" }}/>
              <div style={{ display: "flex", gap: "5px" }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{
                    width: "4px", height: "4px",
                    borderRadius: "1px",
                    background: "#c9963a",
                    opacity: 0.4 + i * 0.2,
                    transform: "rotate(45deg)",
                  }}/>
                ))}
              </div>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(184,134,11,0.25))" }}/>
            </motion.div>

            <motion.p {...fadeUp(0.5)} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}>
              Response within 24 hours · Based in Dhaka, Bangladesh
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSectionPage;