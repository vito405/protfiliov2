import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { icon: faHtml5, label: "HTML5", color: "text-orange-600" },
  { icon: faCss3Alt, label: "CSS", color: "text-blue-600" },
  { icon: faJsSquare, label: "JavaScript", color: "text-yellow-400" },
  { icon: faReact, label: "React.js", color: "text-blue-300" },
];

const Skills = () => {
  const [isHovering, setisHovering] = useState<string | null>(null);
  return (
    <section id="Skills">
      <div className="flex flew-row items-center justify-center gap-[3rem] mt-[3rem]">
        {skills.map(({ icon, label, color }) => (
          <div
            className="flex flex-col items-center h-[5rem] w-[8rem]"
            key={label}
          >
            <FontAwesomeIcon
              onMouseEnter={() => setisHovering(label)}
              onMouseLeave={() => setisHovering(null)}
              icon={icon}
              className={`text-[7rem] hover:text-[7.4rem] ${color}`}
              title={label}
            />
            {isHovering === label && <span className="text-2xl">{label}</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
