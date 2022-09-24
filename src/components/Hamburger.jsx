import { useState } from "react";
import "./Hamburger.css";

function Hamburger(props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      {!open && (
        <div className="hamburger" onClick={toggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {open && "X"}
    </>
  );
}

export default Hamburger;
