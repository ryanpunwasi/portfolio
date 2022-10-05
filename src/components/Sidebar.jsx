import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

function Sidebar({ isOpen, items }) {
  const renderItems = items.map(item => <SidebarItem item={item} />);

  return (
    <ul className={`sidebar ${isOpen ? "open" : "closed"}`}>{renderItems}</ul>
  );
}

export default Sidebar;
