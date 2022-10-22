import { useState } from "react";
import "./ScrollAnimation.scss";

function ScrollAnimation(props) {
  const [saturation, setSaturation] = useState(0.5);
  return (
    <section
      style={{
        backgroundImage: `url('${props.image}')`,
        backgroundSize: "100% 100%",
        backgroundBlendMode: `${props.blendMode || "multiply"}`,
        filter: `saturate(${saturation})`,
      }}
      id={props.id}
      className="scroll"
    >
      {props.children}
    </section>
  );
}

export default ScrollAnimation;
