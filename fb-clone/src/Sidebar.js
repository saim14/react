import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
import EmojiFlagsRoundedIcon from "@material-ui/icons/EmojiFlagsRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import MessageRoundedIcon from "@material-ui/icons/MessageRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import VideoLibraryRoundedIcon from "@material-ui/icons/VideoLibraryRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalRoundedIcon}
        title="Covid 19 Information"
      />
      <SidebarRow Icon={EmojiFlagsRoundedIcon} title="Pages" />
      <SidebarRow Icon={PeopleAltRoundedIcon} title="Friends" />
      <SidebarRow Icon={MessageRoundedIcon} title="Messages" />
      <SidebarRow Icon={StorefrontRoundedIcon} title="Stores" />
      <SidebarRow Icon={VideoLibraryRoundedIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreRoundedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
