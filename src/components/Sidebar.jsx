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
    <div className="sidebar-container">
      <div
        className={`sidebar ${
          sidebarOpen === null ? "none" : sidebarOpen ? "open" : "closed"
        }`}
      >
        <ul>{renderItems}</ul>
      </div>
      <ul className="sidebar-contact">
        <li>
          <i
            style={{ color: "#0072b1" }}
            className="fa-brands fa-linkedin fa-2xl"
          ></i>
        </li>
        <li>
          <i className="fa-brands fa-square-github fa-2xl"></i>
        </li>
        <li>
          <i
            style={{ color: "#595959" }}
            className="fa-solid fa-file fa-2xl"
          ></i>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
