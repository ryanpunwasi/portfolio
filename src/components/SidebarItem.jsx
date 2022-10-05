import "./SidebarItem.css";

function SidebarItem(props) {
  return <li className="sidebar__item">{props.item.title}</li>;
}

export default SidebarItem;
