import Hamburger from "./Hamburger";

import "./Nav.css";
function Nav(props) {
  return (
    <nav className="nav">
      <Hamburger {...props} />
    </nav>
  );
}

export default Nav;
