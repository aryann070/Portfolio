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
  { name: "HTML", icon: FaHtml5, color: "#f97316" },
  { name: "CSS", icon: FaCss3Alt, color: "#3b82f6" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#9333ea" },
  { name: "JavaScript", icon: FaJsSquare, color: "#facc15" },
  { name: "React JS", icon: FaReact, color: "#22d3ee" },
  { name: "Node JS", icon: FaNodeJs, color: "#22c55e" },
  { name: "Express JS", icon: SiExpress, color: "#9ca3af" },
  { name: "SQL", icon: SiMysql, color: "#2563eb" },
  { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
  { name: "Python", icon: FaPython, color: "#eab308" },
  { name: "Figma", icon: FaFigma, color: "#ec4899" },
];

const TechnicalSkills = () => {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Technical{" "}
          <span
            style={{
              background: "linear-gradient(to right,var(--gradient-start),var(--gradient-end))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Skills
          </span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="group rounded-2xl p-8 flex flex-col items-center justify-center shadow-md hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{ background: "var(--bg-card)" }}
            >
              <Icon
                className="text-5xl mb-4"
                style={{ color: skill.color }}
              />
              <p className="text-sm font-medium tracking-wide">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechnicalSkills;