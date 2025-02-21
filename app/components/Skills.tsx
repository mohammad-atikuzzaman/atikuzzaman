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
  SiNextdotjs,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import "./skillsStyle.css";
import Title from "./reusableComponents/Title";

const Skills = () => {
  return (
    <section id="skills" className="mt-12 bg-sky-50">
      <div className="px-4 py-12 max-w-screen-xl mx-auto space-y-8">
        <Title title="Skills" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-[80%] mx-auto">
          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-[#ff6344] ">
            <FaHtml5 className="text-xl md:text-3xl  animate-bounce"></FaHtml5>
            <div>
              <h4 className="font-semibold md:text-3xl">HTML</h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-blue-600  ">
            <FaCss3 className="text-xl md:text-3xl animate-bounce"></FaCss3>
            <div>
              <h4 className="font-semibold md:text-3xl">CSS</h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-blue-400">
            <RiTailwindCssFill className="text-2xl md:text-3xl  animate-bounce"></RiTailwindCssFill>
            <div>
              <h4 className="font-semibold md:text-3xl">Tailwind CSS</h4>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center  text-[#1e4a83] hover:text-violet-700">
            <FaBootstrap className="text-xl md:text-3xl  anmstretching"></FaBootstrap>
            <div>
              <h4 className="font-semibold md:text-3xl">BootStrap</h4>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center  text-[#1e4a83] hover:text-yellow-500">
            <BiLogoJavascript className="text-2xl md:text-3xl  animate-bounce"></BiLogoJavascript>
            <div>
              <h4 className="font-semibold md:text-3xl">JavaScript</h4>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center text-[#1e4a83] hover:text-blue-700">
            <SiTypescript className="text-2xl md:text-3xl shake"></SiTypescript>
            <div>
              <h4 className="font-semibold md:text-3xl">TypeScript</h4>
            </div>
          </div>

          <div className="flex flex-col  items-center justify-center text-[#1e4a83] hover:text-blue-400">
            <FaReact className="text-xl md:text-3xl  anm"></FaReact>
            <div>
              <h4 className="font-semibold md:text-3xl">React JS</h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-black ">
            <SiNextdotjs className="text-xl md:text-3xl  nextst bg-white rounded-full"></SiNextdotjs>
            <div>
              <h4 className="font-semibold md:text-3xl  ">Next JS</h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-green-600">
            <FaNodeJs className="text-xl md:text-3xl  animate-bounce"></FaNodeJs>
            <div>
              <h4 className="font-semibold md:text-3xl">Node JS</h4>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-black">
            <SiExpress className="text-xl md:text-3xl  animate-bounce"></SiExpress>
            <div>
              <h4 className="font-semibold md:text-3xl">Express JS</h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-green-700">
            <SiMongodb className="text-xl md:text-3xl  animate-bounce"></SiMongodb>
            <div>
              <h4 className="font-semibold md:text-3xl">MongoDB</h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[#1e4a83] hover:text-black">
            <SiSocketdotio className="text-xl md:text-3xl animate-pulse"></SiSocketdotio>
            <div>
              <h4 className="font-semibold md:text-3xl">Socket.IO</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
