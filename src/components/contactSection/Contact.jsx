"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactSectionPage = () => {
  return (
    <section className="bg-[#05010d] py-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#140c1c] p-8 md:p-12 rounded-[32px] border border-white/5 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
            Let&apos;s work together!
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            I design and code beautifully simple things and i love what i do. Just simple like that!
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First name" 
                className="w-full bg-[#05010d] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
              />
              <input 
                type="text" 
                placeholder="Last name" 
                className="w-full bg-[#05010d] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[#05010d] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
              />
              <input 
                type="tel" 
                placeholder="Phone number" 
                className="w-full bg-[#05010d] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
              />
            </div>
            
            <select className="w-full bg-[#05010d] border border-white/10 rounded-xl px-5 py-4 text-gray-400 focus:border-purple-500 outline-none transition-all appearance-none cursor-pointer">
              <option>Select an option</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Full Stack Project</option>
            </select>

            <textarea 
              rows="5" 
              placeholder="Message" 
              className="w-full bg-[#05010d] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-purple-500 outline-none transition-all placeholder:text-gray-600 resize-none"
            ></textarea>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Phone */}
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-purple-600 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg transition-transform group-hover:scale-110">
              <FiPhone />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <h4 className="text-white text-xl font-semibold">+880 1793948085</h4>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-purple-600 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg transition-transform group-hover:scale-110">
              <FiMail />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <h4 className="text-white text-xl font-semibold">tonoysharma58@gmail.com</h4>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-purple-600 to-blue-600 flex items-center justify-center text-white text-xl shadow-lg transition-transform group-hover:scale-110">
              <FiMapPin />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Address</p>
              <h4 className="text-white text-xl font-semibold leading-relaxed">
                Dhaka Bangladesh
              </h4>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSectionPage;