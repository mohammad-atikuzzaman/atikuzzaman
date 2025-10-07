"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import Title from "./reusableComponents/Title";
import Image from "next/image";
import ProfileInfo from "./ProfileInfo";

const About: FC = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageAnim = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      id="about"
      aria-label="About Me"
      className="py-20 px-4 sm:px-8 max-w-screen-xl mx-auto bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-indigo-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <Title title="About Me" />

      <motion.div
        className=" my-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl dark:shadow-blue-900/20"
        variants={item}
      >
        <p className="font-light text-gray-700 dark:text-gray-200 pl-4 border-l-4 border-indigo-500">
  Turning ideas into powerful digital experiences — Im <span className="font-medium text-indigo-600 dark:text-indigo-400">Atikuzzaman</span>, a MERN Stack Developer dedicated to building modern, scalable, and high-performing web applications that help businesses grow with clarity and confidence.
</p>

      </motion.div>

      <div className="flex flex-col lg:flex-row items-stretch gap-10 bg-white/50 dark:bg-gray-900/50  sm:p-10 rounded-2xl backdrop-blur-sm">
        <motion.div
          className="w-full lg:w-[35%] overflow-hidden rounded-2xl"
          variants={imageAnim}
        >
          <Image
            src="/photos/profile.png"
            priority={true}
            alt="Profile"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-2xl relative z-10 transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        <motion.div
          className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProfileInfo />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
