import { useState, useRef, useEffect } from "react";
import "./ScrollAnimation.scss";

function ScrollAnimation(props) {
  const [saturation, setSaturation] = useState(0);
  const sectionEl = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const windowOffset = window.scrollY;
      const elementOffsetTop = sectionEl.current.offsetTop;
      const elementHeight = sectionEl.current.offsetHeight;

      const distance = windowOffset + windowHeight - elementOffsetTop;
      const percentage = Math.round(
        distance / ((windowHeight + elementHeight) / 100)
      );

      const sat = Math.min(100, Math.max(0, percentage / 100));
      setSaturation(sat * 4);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      style={{
        backgroundImage: `url('${props.image}')`,
        backgroundSize: "100% 100%",
        backgroundBlendMode: `${props.blendMode || "multiply"}`,
        backgroundAttachment: "fixed",
        filter: `saturate(${saturation})`,
      }}
      id={props.id}
      className="scroll"
      ref={sectionEl}
    ></section>
  );
}

export default ScrollAnimation;
