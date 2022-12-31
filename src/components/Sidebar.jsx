import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

function Sidebar({ items }) {
  const { sidebarOpen } = useContext(SidebarContext);
  const renderItems = items.map(item => (
    <SidebarItem key={item.title} item={item} />
  ));

  return (
    <div
      className={`sidebar-container ${
        sidebarOpen === null ? "none" : sidebarOpen ? "open" : "closed"
      }`}
    >
      <ul className="sidebar">{renderItems}</ul>
      <ul className="sidebar-contact">
        <li>
          <i
            style={{ color: "#0072b1" }}
            className="fa-brands fa-linkedin fa-xl"
          ></i>
        </li>
        <li>
          <i className="fa-brands fa-square-github fa-xl"></i>
        </li>
        <li>
          <i
            style={{ color: "#595959" }}
            className="fa-solid fa-file fa-xl"
          ></i>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
