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
    <ul
      className={`sidebar ${
        sidebarOpen === null ? "none" : sidebarOpen ? "open" : "closed"
      }`}
    >
      {renderItems}
    </ul>
  );
}

export default Sidebar;
