"use client"

import React, { FC } from "react";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";
import TypeWriterEffect from "./TypeWriterEffect";
import Link from "next/link";

export const orbitron = Orbitron({ subsets: ["latin"] });

const Hero: FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.5 }
    },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 120, delay: 0.5 }
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex items-center justify-center bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/photos/atikuzzaman.png')",
      }}
    >
      <div
        className={`${orbitron.className} bg-sky-900 bg-opacity-20 w-full min-h-screen flex flex-col justify-center items-start p-6 md:p-12`}
      >
        <motion.h1
          variants={textVariants}
          className="text-white text-4xl md:text-5xl font-bold"
        >
          Md Atikuzaman
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-300 text-xl md:text-2xl mt-4"
        >
          Im <TypeWriterEffect />
        </motion.p>


          <Link
            className="inline-block px-4 mt-4 bg-sky-500 md:text-lg lg:text-xl text-white rounded-sm hover:scale-105"
            href="/Full-Stack-Developer-Atikuzzaman-Resume.pdf"
            target="_blank"
          >
            Resume
          </Link>

      </div>
    </motion.div>
  );
};

export default Hero;