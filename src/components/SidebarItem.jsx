import "./SidebarItem.css";

function SidebarItem(props) {
  return (
    <a className="sidebar__link" href={`${props.item.link}`}>
      <li className="sidebar__item">{props.item.title}</li>
    </a>
  );
}

export default SidebarItem;
