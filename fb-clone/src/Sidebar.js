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

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
        title="Saim Islam"
      />
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
