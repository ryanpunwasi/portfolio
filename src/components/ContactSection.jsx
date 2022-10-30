import { useState, useRef } from "react";
import Contact from "./Contact";
import "./ContactSection.scss";

import "../";

const ContactSection = () => {
  const [lights, setLights] = useState(false);
  const audioEl = useRef(null);

  const turnOnLights = () => {
    if (!lights) {
      audioEl.current.volume = 0.5;
      audioEl.current.play();
      setLights(true);
    }
  };

  return (
    <div className={`contact__container ${lights ? "on" : "off"}`}>
      <audio src="/audio/spotlight.mp3" ref={audioEl} preload="auto"></audio>
      <button
        onClick={turnOnLights}
        className={`lightswitch ${lights ? "on" : ""}`}
      >
        <i className="fa-solid fa-lightbulb"></i>
      </button>
      <Contact lights={lights} />
    </div>
  );
};

export default ContactSection;
