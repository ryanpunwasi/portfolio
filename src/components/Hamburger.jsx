import "./Hamburger.css";

function Hamburger({ isOpen, toggle }) {
  return (
    <div className={`hamburger ${isOpen ? "open" : "closed"}`} onClick={toggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Hamburger;
