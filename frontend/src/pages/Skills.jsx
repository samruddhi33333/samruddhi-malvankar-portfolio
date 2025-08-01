import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiPostman,
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaHtml5 color="#e44d26" />, name: "HTML" },
    { icon: <FaCss3Alt color="#264de4" />, name: "CSS" },
    { icon: <FaJs color="#f0db4f" />, name: "JavaScript" },
    { icon: <FaReact color="#61dbfb" />, name: "React.js" },
    { icon: <FaNodeJs color="#68a063" />, name: "Node.js" },
    { icon: <SiExpress color="#000" />, name: "Express.js" },
    { icon: <SiMongodb color="#4db33d" />, name: "MongoDB" },
    { icon: <SiMysql color="#00758f" />, name: "MySQL" },
    { icon: <SiGithub color="#000" />, name: "GitHub" },
    { icon: <FaGitAlt color="#f1502f" />, name: "Git" },
    { icon: <SiPostman color="#ff6c37" />, name: "REST APIs" },
    { icon: <FaBootstrap color="#563d7c" />, name: "Bootstrap" },
    { icon: <SiTailwindcss color="#38bdf8" />, name: "Tailwind CSS" },
  ];

  return (
    <section className="skills-section" id="skills"> {/* Add id here */}
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
