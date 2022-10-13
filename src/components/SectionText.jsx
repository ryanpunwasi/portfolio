import "./SectionText.scss";
const SectionText = function ({ text }) {
  return (
    <div className="section__text__container">
      <p className="section__text">{text}</p>
    </div>
  );
};

export default SectionText;
