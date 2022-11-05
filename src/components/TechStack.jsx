import TechStackItem from "./TechStackItem";
import "./TechStack.scss";

const TechStack = function ({ stack }) {
  const renderedItems = stack.map(item => (
    <TechStackItem key={item} item={item} />
  ));
  return <ul className="tech__stack">{renderedItems}</ul>;
};

export default TechStack;
