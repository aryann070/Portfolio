import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
  { name: "React JS", icon: FaReact, color: "text-cyan-400" },
  { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express JS", icon: SiExpress, color: "text-gray-200" },
  { name: "SQL", icon: SiMysql, color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
  { name: "Figma", icon: FaFigma, color: "text-pink-500" },
];

const TechnicalSkills = () => {
  return (
    <section className="bg-gray-900 py-20 px-6 text-white">
      <div className="text-center mb-16">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-4">
        Technical{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group bg-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center 
              shadow-md hover:shadow-xl hover:-translate-y-2 
              transition-all duration-300 cursor-pointer"
            >
              <Icon
                className={`text-5xl mb-4 ${skill.color} 
                group-hover:drop-shadow-[0_0_15px_currentColor]`}
              />
              <p className="text-sm font-medium tracking-wide">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechnicalSkills;
