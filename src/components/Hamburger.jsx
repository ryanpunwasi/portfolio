import { useState } from "react";
import "./Hamburger.css";

function Hamburger(props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <div className={`hamburger ${open ? "open" : "closed"}`} onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Hamburger;
