import { useState, useEffect } from "react";
import SkillsChips from "./SkillsChips";

import "./Skills.scss";

const sectionsObj = {
  0: {
    languages: [
      "HTML5",
      "CSS3",
      "SASS",
      "Javascript",
      "Typescript",
      "Ruby",
      "PHP",
      "SQL",
      "Python",
    ],
  },
  1: {
    frameworks: [
      "NodeJS",
      "React",
      "Redux",
      "Express",
      "EJS",
      "jQuery",
      "Bootstrap",
      "Rails",
    ],
  },
  2: { databases: ["PostgreSQL", "MySQL"] },
  3: { testing: ["Mocha", "Chai", "Jest", "Rspec", "Storybook", "Cypress"] },
};

const Skills = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let targets = document.querySelectorAll(".skill");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShow(true);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    targets.forEach(target => observer.observe(target));
  });

  return (
    <div className="skills__section">
      <div>
        <div className={`skill ${show ? "show" : ""}`}>
          <p className="skills__header">Languages</p>
          <SkillsChips skills={sectionsObj[0].languages} />
        </div>
        <div className={`skill ${show ? "show" : ""}`}>
          <p className="skills__header">Frameworks/Libraries</p>
          <SkillsChips skills={sectionsObj[1].frameworks} />
        </div>
        <div className={`skill ${show ? "show" : ""}`}>
          <p className="skills__header">Databases</p>
          <SkillsChips skills={sectionsObj[2].databases} />
        </div>
        <div className={`skill ${show ? "show" : ""}`}>
          <p className="skills__header">Testing</p>
          <SkillsChips skills={sectionsObj[3].testing} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
