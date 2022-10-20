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
  return (
    <div className="skills__section">
      <div>
        <div>
          <p className="skills__header">Languages</p>
          <SkillsChips skills={sectionsObj[0].languages} />
        </div>
        <div>
          <p className="skills__header">Frameworks/Libraries</p>
          <SkillsChips skills={sectionsObj[1].frameworks} />
        </div>
        <div>
          <p className="skills__header">Databases</p>
          <SkillsChips skills={sectionsObj[2].databases} />
        </div>
        <div>
          <p className="skills__header">Testing</p>
          <SkillsChips skills={sectionsObj[3].testing} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
