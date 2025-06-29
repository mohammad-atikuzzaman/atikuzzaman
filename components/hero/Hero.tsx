"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "./atikuzzaman.png";
import TypeWriterEffect from "../TypeWriterEffect";
import Link from "next/link";

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
    <section className="relative bg-[url(/photos/bg.jpg)] w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Content Section - Stacked on mobile, side-by-side on desktop */}
      <motion.div
        className="z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-100px" }} 
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
          variants={item}
        >
          Md Atikuzzaman
        </motion.h1>
        
        <motion.div 
          className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-8 md:mb-12"
          variants={item}
        >
          I am <TypeWriterEffect />
        </motion.div>
        
        {/* Call-to-action buttons */}
        <motion.div className="flex gap-4" variants={item}>
          <Link 
            href="/contact" 
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
          >
            Hire Me
          </Link>
          <Link 
            href="/MERN_Stack_developer_Atikuzzaman's_resume.pdf" 
            target="_blank"
            className="px-6 py-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-lg transition-all"
          >
            Download CV
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section - Centered on mobile, aligned bottom on desktop */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center items-end mt-8 md:mt-0"
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-100px" }} 
        variants={imageAnim}
      >
        <div className="relative border-4 border-blue-700 w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-[70vh] aspect-square">
          <Image
            src={ProfileImage}
            alt="Atikuzzaman"
            fill
            className="object-contain object-bottom border-4 mt-2 ml-2"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </section>
  );
};

export default Hero;