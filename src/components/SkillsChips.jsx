import SkillsChip from "./SkillsChip";
import "./SkillsChips.scss";

const SkillsChips = ({ skills }) => {
  const renderedSkills = skills.map(skill => (
    <SkillsChip key={skill} skill={skill} />
  ));
  return <div className="skills__chips">{renderedSkills}</div>;
};

export default SkillsChips;
