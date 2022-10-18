import "./SkillsNav.scss";

const SkillsNav = ({ selected, next, previous }) => {
  return (
    <div className="skills__nav">
      <span onClick={previous} className="skills__arrow">
        &lt;
      </span>
      <h2 className="skills__name">{selected}</h2>
      <span className="skills__arrow" onClick={next}>
        &gt;
      </span>
    </div>
  );
};

export default SkillsNav;
