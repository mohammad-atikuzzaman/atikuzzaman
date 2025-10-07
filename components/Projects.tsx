"use client";

import ThreeDCardDemo from "./ThreeDCardDemo";
import React, { FC } from "react";
import Title from "./reusableComponents/Title";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      ease: "easeOut",
    },
  },
};

const Projects: FC = () => {
  return (
    <motion.section
      id="projects"
      className="max-w-screen-xl mx-auto mt-16 px-4 mb-16 py-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Title title="Projects" />

      <motion.p
        className="mt-8 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Explore my latest projects showcasing my skills and expertise in web
        development
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-8 pt-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item}>
          <ThreeDCardDemo
            title="ChatVibe"
            description="A real-time video conferencing application with screen sharing and chat features"
            url="https://chat-vibe-ashy.vercel.app/"
            img="/photos/chatvibe.png"
            github="https://github.com/mohammad-atikuzzaman/-chatvibe"
          />
        </motion.div>

        <motion.div variants={item}>
          <ThreeDCardDemo
            title="CodeAtik Agent"
            description="AI-powered website builder that creates custom websites based on user requirements"
            url="https://codeatikagent.netlify.app/"
            img="/photos/codeatik.png"
            github="https://github.com/mohammad-atikuzzaman/code-atik-frontend"
          />
        </motion.div>

        <motion.div variants={item}>
          <ThreeDCardDemo
            title="Vibe Palace"
            description="Comprehensive room booking platform with advanced filtering and payment integration"
            url="https://vibe-palace.web.app/"
            img="/photos/vibePalace.png"
            github="https://github.com/mohammad-atikuzzaman/vibePalace"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
        >
          <span>View All Projects</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
