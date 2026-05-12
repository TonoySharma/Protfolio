"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiArrowRight, FiCheckCircle, FiLoader } from "react-icons/fi";
import emailjs from "@emailjs/browser"; // Install this: npm install @emailjs/browser

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
    href: "https://maps.google.com/?q=Dhaka,Bangladesh",
  },
];

const ContactSectionPage = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS credentials
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
      formRef.current, 
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 5000); // Reset success state after 5s
    }, (error) => {
      setLoading(false);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes shimmerFlow { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseGold { 0%,100% { box-shadow: 0 0 0 0 rgba(201,150,58,0.0); } 50% { box-shadow: 0 0 0 8px rgba(201,150,58,0.12); } }
        
        .gold-input {
          width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(184,134,11,0.15);
          border-radius: 12px; padding: 14px 18px; color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 14px; outline: none; transition: all 0.3s;
        }
        .gold-input:focus { border-color: rgba(255,215,0,0.5); background: rgba(255,215,0,0.03); box-shadow: 0 0 0 3px rgba(201,150,58,0.08); }
        
        .send-btn {
          position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;
          gap: 8px; width: 100%; height: 52px; border-radius: 999px; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.16em;
          text-transform: uppercase; color: #09070f; transition: all 0.3s;
        }
        .send-btn::before {
          content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #b8860b 0%, #ffd700 40%, #fff8dc 55%, #ffd700 70%, #b8860b 100%);
          background-size: 200% auto; animation: shimmerFlow 2.5s linear infinite;
        }
        .send-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .contact-card {
          display: flex; align-items: center; gap: 20px; padding: 20px 24px; border-radius: 16px;
          border: 1px solid rgba(184,134,11,0.1); background: rgba(255,255,255,0.02); transition: all 0.3s;
        }
        .contact-card:hover { border-color: rgba(255,215,0,0.25); background: rgba(255,215,0,0.03); transform: translateX(6px); }
      `}</style>

      <section style={{ position: "relative", overflow: "hidden", background: "#05030a", minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px" }}>
        
        {/* Background Gradients & Grid remain the same... */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(184,134,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,134,11,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }}/>

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "48px", position: "relative", zIndex: 1 }}>

          {/* LEFT — Form */}
          <motion.div {...fadeUp(0)} style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(24px)", borderRadius: "28px", border: "1px solid rgba(184,134,11,0.15)", padding: "40px", boxShadow: "0 24px 80px rgba(0,0,0,0.5)" }}>
            
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", marginBottom: "20px", color: "#ffd700" }}>Let&apos;s Work Together</h2>

            <form ref={formRef} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input className="gold-input" name="first_name" type="text" placeholder="First name" required />
                <input className="gold-input" name="last_name" type="text" placeholder="Last name" required />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <input className="gold-input" name="user_email" type="email" placeholder="Email address" required />
                <input className="gold-input" name="user_phone" type="tel" placeholder="Phone number" />
              </div>
              <select className="gold-input" name="service" required>
                <option value="" className="text-black">Select a service</option>
                <option value="Web Development" className="text-black">Web Development</option>
                <option value="UI/UX Design" className="text-black">UI/UX Design</option>
                <option value="Full Stack" className="text-black">Full Stack Project</option>
              </select>
              <textarea className="gold-input" name="message" rows={4} placeholder="Your message…" required style={{ resize: "none" }} />

              <button type="submit" className="send-btn" disabled={loading}>
                <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "8px" }}>
                  {loading ? <FiLoader className="animate-spin" /> : sent ? <FiCheckCircle /> : "Send Message"}
                  {!loading && !sent && <FiArrowRight />}
                </span>
              </button>
              
              {sent && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: "#ffd700", fontSize: "12px", textAlign: "center", marginTop: "10px" }}>
                  Message sent successfully! Check your email.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* RIGHT — Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ color: "white", fontSize: "24px", marginBottom: "10px" }}>Contact Details</h3>
            
            {contactItems.map(({ icon, label, value, href }, i) => (
              <motion.div key={label} {...fadeUp(0.1 + i * 0.1)}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: "none" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(184,134,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffd700", fontSize: "20px" }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "10px", color: "gray", textTransform: "uppercase" }}>{label}</p>
                    <p style={{ fontSize: "18px", color: "white" }}>{value}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSectionPage;