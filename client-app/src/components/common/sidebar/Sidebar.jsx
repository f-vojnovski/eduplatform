import "./Sidebar.css";
import "./SidebarData";
import { SidebarData } from "./SidebarData";
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import CloseButton from "./CloseButton";

export default function Sidebar(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleSidebarMenu = () => {
    setMenuVisible(!menuVisible);
    props.onMenuStatusChange(menuVisible);
  };

  const onMenuItemClicked = () => {
    setMenuVisible(false);
    props.onMenuStatusChange(menuVisible);
  }

  return (
    <div className="sidebar-container">
      {!menuVisible && <HamburgerButton onClick={toggleSidebarMenu} />}

      <div className={menuVisible ? "sidebar" : "element-hidden"}>
        <CloseButton onClick={toggleSidebarMenu} />

        <h3 className="sidebar-header">Навигација</h3>
        {SidebarData.map((sidebarItem) => {
          return (
            <SidebarItem
              key={sidebarItem.id}
              {...sidebarItem}
              onMenuItemClicked={onMenuItemClicked}
            />
          );
        })}
      </div>
    </div>
  );
}
