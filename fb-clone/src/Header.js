import React from "react";
import "./Header.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import OndemandVideoRoundedIcon from "@material-ui/icons/OndemandVideoRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded"; //Message icon
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import FlagRoundedIcon from "@material-ui/icons/FlagRounded";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt="logo"
        />
        <div className="header__input">
          <SearchRoundedIcon />
          <input placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__options header__options--active">
          <HomeRoundedIcon fontSize="large" />
        </div>
        <div className="header__options">
          <FlagRoundedIcon fontSize="large" />
        </div>
        <div className="header__options">
          <OndemandVideoRoundedIcon fontSize="large" />
        </div>
        <div className="header__options">
          <StorefrontRoundedIcon fontSize="large" />
        </div>
        <div className="header__options">
          <SupervisedUserCircleRoundedIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} className="header__avatar" />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddRoundedIcon />
        </IconButton>
        <IconButton>
          <ForumRoundedIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
