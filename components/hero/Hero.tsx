"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "./atikuzzaman.png";
import TypeWriterEffect from "../TypeWriterEffect";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import "./profile.css"

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
  },
};

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full  h-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: 100 + (index * 50) + "px",
              height: 100 + (index * 50) + "px",
              left: 10 + (index * 15) + "%",
              top: 10 + (index * 15) + "%",
            }}
            animate={{
              x: [0, 20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content Section - Stacked on mobile, side-by-side on desktop */}
      <motion.div
        className="z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-0 text-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }} 
      >
        <motion.div 
          className="text-sm sm:text-base text-blue-400 font-medium mb-2"
          variants={item}
        >
          Hello, Welcome to my portfolio
        </motion.div>
        
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          variants={item}
        >
          Md Atikuzzaman
        </motion.h1>
        
        <motion.div 
          className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-6"
          variants={item}
        >
          I am <TypeWriterEffect />
        </motion.div>
        
        <motion.p
          className="text-gray-300 max-w-md mb-8"
          variants={item}
        >
          Passionate about creating elegant, user-friendly web applications with modern technologies that solve real-world problems.
        </motion.p>
        
        {/* Social media links */}
        <motion.div className="flex gap-4 mb-8" variants={item}>
          <motion.a 
            href="https://github.com/mohammad-atikuzzaman" 
            target="_blank"
            className="text-white hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/matikuzzaman" 
            target="_blank"
            className="text-white hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a 
            href="https://x.com/m_akash10" 
            target="_blank"
            className="text-white hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter size={24} />
          </motion.a>
        </motion.div>
        
        {/* Call-to-action buttons */}
        <motion.div className="flex gap-4" variants={item}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg transition-all shadow-lg hover:shadow-blue-500/50"
            >
              Hire Me
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/MERN_Stack_developer_Atikuzzaman's_resume.pdf" 
              target="_blank"
              className="px-6 py-3 bg-transparent border-2 border-blue-500 text-white hover:bg-blue-500/20 rounded-lg transition-all"
            >
              Resume
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Image Section - Centered on mobile, aligned bottom on desktop */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center items-end mt-8 md:mt-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }} 
        variants={imageAnim}
      >
        <motion.div 
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-blue-500 profile"
    
        >
          <motion.div 
            className="w-full h-full"
          >
            <Image
              src={ProfileImage}
              alt="Atikuzzaman"
              fill
              className="object-cover"
            priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-2 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="opacity-50 lg:opacity-100 text-xs lg:text-sm lg:mb-2 ">Scroll Down</span>
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;