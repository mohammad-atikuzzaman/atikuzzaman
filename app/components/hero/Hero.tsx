"use client"
import React from "react";
import { motion } from "framer-motion";
import TypeWriterEffect from "../TypeWriterEffect";
import Image from "next/image";
import ProfileImage from "./atikuzzaman.png";

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
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const imageAnim = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const Hero = () => {
  return (
    <section className="relative bg-[url(/photos/bg.jpg)] w-full min-h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* First Section - Vertically Centered with Animation */}
      <motion.section 
        className="text-white z-10 py-8 md:py-0 flex-1 flex flex-col justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          variants={item}
        >
          Md Atikuzzaman
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl font-medium"
          variants={item}
        >
          I am <TypeWriterEffect />
        </motion.p>
      </motion.section>

      {/* Second Section - Bottom Aligned with Animation */}
      <motion.section 
        className="relative w-full md:w-auto flex justify-center md:block mt-8 md:mt-0"
        initial="hidden"
        animate="show"
        variants={imageAnim}
      >
        <div className="relative h-64 md:h-[80vh] w-64 md:w-auto aspect-square">
          <Image
            src={ProfileImage}
            alt="Atikuzzaman"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </motion.section>

      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-blue-900/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </section>
  );
};

export default Hero;