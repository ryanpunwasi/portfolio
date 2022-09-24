import Hamburger from "./Hamburger";

import "./Nav.css";
function Nav(props) {
  return (
    <nav className="nav">
      <div className="nav__item">
        <Hamburger />
      </div>
    </nav>
  );
}

export default Nav;
