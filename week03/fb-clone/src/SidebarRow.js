import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ Icon, title, src }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon className="sidebarRow__icon" />}
      <h4 className="sidebarRow__title">{title}</h4>
    </div>
  );
}

export default SidebarRow;
