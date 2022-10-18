import { useState } from "react";
import SkillsChips from "./SkillsChips";
import SkillsNav from "./SkillsNav";

import "./Skills.scss";

const sections = [
  "languages",
  "frameworks/libraries",
  "databases",
  "version control",
  "testing",
];

const sectionsObj = {
  0: {
    languages: [
      "HTML5",
      "CSS3",
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
      "SASS",
      "Bootstrap 5",
      "Rails",
    ],
  },
  2: { databases: ["PostgreSQL", "MySQL"] },
  3: { "version control": ["Git"] },
  4: { testing: ["Mocha", "Chai", "Storybook", "Cypress", "Rspec"] },
};

const Skills = () => {
  const [selected, setSelected] = useState(0);

  const nextSection = () => {
    setSelected(prev => (prev + 1) % sections.length);
  };

  const previousSection = () => {
    setSelected(prev => (prev + sections.length - 1) % sections.length);
  };

  return (
    <div className="skills__section">
      <SkillsNav
        selected={sections[selected]}
        next={nextSection}
        previous={previousSection}
      />
      {/* <SkillsChips /> */}
    </div>
  );
};

export default Skills;
