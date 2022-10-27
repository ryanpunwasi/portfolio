import { useState } from "react";
import Contact from "./Contact";
import "./ContactSection.scss";

const ContactSection = () => {
  const [lights, setLights] = useState(false);

  return (
    <div className="contact__container">
      <div onClick={() => setLights(!lights)} className="lightswitch">
        <div className={`switch ${lights ? "on" : ""}`}>Off</div>
      </div>
      <Contact lights={lights} />
    </div>
  );
};

export default ContactSection;
