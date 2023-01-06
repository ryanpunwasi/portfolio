import { useEffect, useState, useRef } from "react";
import "./SectionText.scss";
const SectionText = function (props) {
  const [show, setShow] = useState(false);
  const textEl = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShow(true);
          } else {
            setShow(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px",
      }
    );

    observer.observe(textEl.current);
  });

  return (
    <div
      className={`section__text__container ${show ? "show" : ""} ${
        props.fadeDirection === "right" ? props.fadeDirection : "left"
      }`}
      ref={textEl}
    >
      <div className={`section__text`}>
        <h2 className="section__text__title">{props.title}</h2>
        <p>{props.children}</p>
      </div>
      <img className="text__image" src={`img/${props.image}`} alt="" />
    </div>
  );
};

export default SectionText;
