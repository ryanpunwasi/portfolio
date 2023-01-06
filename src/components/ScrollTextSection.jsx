import "./ScrollTextSection.scss";
const ScrollTextSection = props => {
  return (
    <div id={props.id} className="scroll__text__section">
      {props.children}
    </div>
  );
};

export default ScrollTextSection;
