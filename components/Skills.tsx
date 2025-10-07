"use client";

import { BiLogoJavascript } from "react-icons/bi";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiRedux,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import "./skillsStyle.css";
import { GrMysql } from "react-icons/gr";
import Title from "./reusableComponents/Title";
import { motion } from "framer-motion";

const Skills = () => {
  // Animation variants for staggered children elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const skillCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="skills"
      className=" bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 overflow-hidden"
    >
      <div className="px-4 py-12 max-w-screen-xl mx-auto space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Title title="Skills" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 mb-12"
          >
            My technical skills and technological knowledge that I can apply to
            your projects
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 w-[90%] mx-auto"
        >
          {/* HTML */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full mb-3 p-3">
              <FaHtml5 className="text-3xl md:text-4xl animate-pulse"></FaHtml5>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                HTML
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-orange-500 h-1.5 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* CSS */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full mb-3 p-3">
              <FaCss3 className="text-3xl md:text-4xl animate-pulse"></FaCss3>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                CSS
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600 text-white rounded-full mb-3 p-3">
              <RiTailwindCssFill className="text-3xl md:text-4xl animate-pulse"></RiTailwindCssFill>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                Tailwind CSS
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-cyan-500 h-1.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Bootstrap */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-full mb-3 p-3">
              <FaBootstrap className="text-3xl md:text-4xl animate-pulse"></FaBootstrap>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                Bootstrap
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-purple-500 h-1.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full mb-3 p-3">
              <BiLogoJavascript className="text-3xl md:text-4xl animate-pulse"></BiLogoJavascript>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                JavaScript
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-yellow-500 h-1.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* TypeScript */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full mb-3 p-3">
              <SiTypescript className="text-3xl md:text-4xl animate-pulse"></SiTypescript>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                TypeScript
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-blue-600 h-1.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* React */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600 text-white rounded-full mb-3 p-3">
              <FaReact className="text-3xl md:text-4xl animate-pulse"></FaReact>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                React
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-cyan-500 h-1.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Redux */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-full mb-3 p-3">
              <SiRedux className="text-3xl md:text-4xl animate-pulse"></SiRedux>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                Redux
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-purple-500 h-1.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Next.js */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-800 text-white rounded-full mb-3 p-3">
              <SiNextdotjs className="text-3xl md:text-4xl animate-pulse"></SiNextdotjs>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                Next.js
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-gray-600 h-1.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Node.js */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full mb-3 p-3">
              <FaNodeJs className="text-3xl md:text-4xl animate-pulse"></FaNodeJs>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                Node.js
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-green-500 h-1.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Express */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-500 to-gray-700 text-white rounded-full mb-3 p-3">
              <SiExpress className="text-3xl md:text-4xl animate-pulse"></SiExpress>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                Express.js
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-gray-500 h-1.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* MongoDB */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full mb-3 p-3">
              <SiMongodb className="text-3xl md:text-4xl animate-pulse"></SiMongodb>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                MongoDB
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-green-500 h-1.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Mongoose */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600 text-white rounded-full mb-3 p-3">
              <SiMongoose className="text-3xl md:text-4xl animate-pulse"></SiMongoose>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                Mongoose
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-red-500 h-1.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* MySQL */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full mb-3 p-3">
              <GrMysql className="text-3xl md:text-4xl animate-pulse"></GrMysql>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                MySQL
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Socket.IO */}
          <motion.div
            variants={skillCardVariants}
           className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:bg-indigo-300 hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100 dark:border-gray-700"

          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-800 text-white rounded-full mb-3 p-3">
              <SiSocketdotio className="text-3xl md:text-4xl animate-pulse"></SiSocketdotio>
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white">
                Socket.IO
              </h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full">
                <div
                  className="bg-gray-600 h-1.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
