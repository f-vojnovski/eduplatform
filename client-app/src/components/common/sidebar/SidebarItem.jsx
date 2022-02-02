import { Link } from "react-router-dom";

const SidebarItem = (props) => {
  const { id, title, path } = props;
  const linkPath = "/articles/" + id;

  return (
    <Link className="router-link" to={linkPath}>
      <div onClick={props.onMenuItemClicked} className="sidebar-item">
        {title}
      </div>
    </Link>
  );
};

export default SidebarItem;
