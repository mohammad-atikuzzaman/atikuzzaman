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
import Title from "../reusableComponents/Title";

const Skills = () => {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      itemScope
      itemType="https://schema.org/ItemList"
      className="mt-12 bg-sky-50 dark:bg-gray-800"
    >
      <div className="px-4 py-12 max-w-screen-xl mx-auto space-y-8">
        <Title title="Skills" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-[80%] mx-auto">
          {/* All skill items follow this pattern - only dark mode text colors added */}
          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-[#ff6344] dark:text-blue-300 dark:hover:text-orange-400">
            <FaHtml5 className="text-xl md:text-3xl animate-bounce"></FaHtml5>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                HTML
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400">
            <FaCss3 className="text-xl md:text-3xl animate-bounce"></FaCss3>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">CSS</h4>
            </div>
          </div>

          <div className="flex flex-col text-center items-center justify-center text-[#1e4a83] hover:text-blue-400 dark:text-blue-300 dark:hover:text-cyan-400">
            <RiTailwindCssFill className="text-2xl md:text-3xl animate-bounce"></RiTailwindCssFill>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                Tailwind CSS
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-violet-700 dark:text-blue-300 dark:hover:text-violet-500">
            <FaBootstrap className="text-xl md:text-3xl anmstretching"></FaBootstrap>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                BootStrap
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-yellow-500 dark:text-blue-300 dark:hover:text-yellow-400">
            <BiLogoJavascript className="text-2xl md:text-3xl animate-bounce"></BiLogoJavascript>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                JavaScript
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500">
            <SiTypescript className="text-2xl md:text-3xl shake"></SiTypescript>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                TypeScript
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-blue-400 dark:text-blue-300 dark:hover:text-cyan-400">
            <FaReact className="text-xl md:text-3xl anm"></FaReact>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                React JS
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-purple-400 dark:text-blue-300 dark:hover:text-purple-400">
            <SiRedux className="text-xl md:text-3xl anm"></SiRedux>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                Redux
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-black dark:text-blue-300 dark:hover:text-white">
            <SiNextdotjs className="text-xl md:text-3xl nextst bg-white dark:bg-gray-800 rounded-full"></SiNextdotjs>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                Next JS
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-green-600 dark:text-blue-300 dark:hover:text-green-500">
            <FaNodeJs className="text-xl md:text-3xl animate-bounce"></FaNodeJs>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                Node JS
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-black dark:text-blue-300 dark:hover:text-gray-300">
            <SiExpress className="text-xl md:text-3xl animate-bounce"></SiExpress>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                Express JS
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-green-700 dark:text-blue-300 dark:hover:text-green-500">
            <SiMongodb className="text-xl md:text-3xl animate-bounce"></SiMongodb>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                MongoDB
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-red-800 dark:text-blue-300 dark:hover:text-red-800">
            <SiMongoose className="text-xl md:text-3xl animate-bounce"></SiMongoose>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                Mongoose
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-black dark:text-blue-300 dark:hover:text-gray-300">
            <GrMysql className="text-xl md:text-3xl animate-pulse"></GrMysql>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                MySQL
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-black dark:text-blue-300 dark:hover:text-gray-300">
            <SiSocketdotio className="text-xl md:text-3xl animate-pulse"></SiSocketdotio>
            <div>
              <h4 className="font-semibold md:text-3xl dark:text-white">
                Socket.IO
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
