import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import "./Hamburger.css";

function Hamburger() {
  const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <div
      className={`hamburger ${sidebarOpen ? "open" : "closed"}`}
      onClick={toggleSidebar}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Hamburger;
