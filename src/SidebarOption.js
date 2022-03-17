import React from "react";
import "./SidebarOption.css";
function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOptions__icon" />}

      {Icon ? <h4>{title}</h4> : <p>안옴</p>}
    </div>
  );
}

export default SidebarOption;
