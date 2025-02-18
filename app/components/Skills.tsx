"use client";
import { useEffect, useRef, useState, FC, ReactNode } from "react";
import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMongoose, SiSocketdotio, SiTypescript } from "react-icons/si";
import Title from "./reusableComponents/Title";
import { RiFireFill } from "react-icons/ri";

interface Skill {
  name: ReactNode;
  percentage: number;
  title: string
}

const Skills: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const skillsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = skillsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skills: Skill[] = [
    { name: <FaHtml5 />, percentage: 95, title:"HTML" },
    { name: <FaCss3 />, percentage: 90, title:"CSS" },
    { name: <IoLogoJavascript />, percentage: 85, title:"JavaScript" },
    { name: <SiTypescript />, percentage: 80, title:"TypeScript" },
    { name: <FaReact />, percentage: 85, title:"React JS" },
    { name: <FaNodeJs />, percentage: 75, title:"Node JS" },
    { name: <SiExpress />, percentage: 80, title:"Express JS" },
    { name: <SiMongodb />, percentage: 80, title:"MongoDB" },
    { name: <SiMongoose />, percentage: 80, title:"Mongoose" },
    { name: <FaGitAlt />, percentage: 90, title:"Git" },
    { name: <RiFireFill />, percentage: 75, title:"Firebase" },
    { name: <SiSocketdotio />, percentage: 80 , title:"Socket IO"},
  ];

  return (
    <section id="skills" className="py-12 mt-12 px-4 bg-sky-50" ref={skillsRef}>
      <Title title="Skills" />
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div title={skill.title} key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <section className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-sm text-gray-600 mt-2 block">
                  {skill.percentage}%
                </span>
              </section>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : "0%",
                    transition: "width 1.5s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
