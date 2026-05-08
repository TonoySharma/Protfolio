"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Banner() {
    return (

        <main className="min-h-screen bg-[#0f0715] text-white flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden relative">


            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
                <h1 className="text-[30vw] font-bold font-sans animate__animated animate__fadeInUp animate__slow text-white">
                    HI
                </h1>
            </div>



            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto w-full">


                <div className="space-y-6 md:space-y-8 text-center md:text-left sm:mt-5">
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight animate__animated animate__backInLeft">
                        Hi, I&apos;m Tonoy
                    </h2>


                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-100 to-purple-400">
                        Hi, I&apos;m Tonoy, a Frontend Web Developer
                    </h1>

                    <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        I specialize in building high-performance, interactive, and visually stunning web applications. My journey as a frontend developer is driven by a deep love for clean code and user-centric design. I don&apos;t just build websites; I craft experiences that engage and inspire.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-6">


                        <a
                            href="#"
                            className="flex items-center gap-3 px-8 py-3 rounded-full border-2 border-purple-500/50 text-purple-200 font-semibold hover:bg-purple-500/10 transition-all duration-300 shadow-lg shadow-purple-500/10"
                        >
                            Download CV <FaDownload className="text-sm" />
                        </a>


                        <div className="flex items-center gap-4">
                            {[
                                { icon: <MdOutlineMailOutline />, href: "https://mail.google.com/mail/u/0/#inbox" },
                                { icon: <SiFacebook />, href: "https://www.facebook.com/tonoy3858" },
                                { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/tonoysharma58/" },
                                { icon: <FaGithub />, href: "https://github.com/TonoySharma" },
                            ].map((social, index) => (
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
                </div>


                <div className="flex items-center justify-center md:justify-end">
                    <motion.div
                        className="relative w-[320px] h-[380px] md:w-[360px] md:h-[420px] rounded-[30px] border-[3px] border-purple-700/50 shadow-2xl shadow-purple-900/40 p-1 bg-[#0f0715]"

                        initial={{ rotate: 10, scale: 0.95 }}


                        whileHover={{
                            rotate: 0,
                            scale: 1,
                            boxShadow: "0px 20px 60px rgba(139, 92, 246, 0.4)",
                        }}


                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 15,
                            duration: 0.5
                        }}
                        style={{ cursor: "pointer" }}
                    >

                        <div className="relative w-full h-full rounded-[26px] overflow-hidden">
                            <Image
                                src="/tonoy.png"
                                alt="Profile of Tonoy Sharma"
                                layout="fill"
                                objectFit="cover"

                                className="grayscale-[30%] hover:grayscale-0 transition-all duration-200"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}