import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://fontmeme.com/images/youtube-logo-since-2017.jpg"
            alt="logo"
          />
        </Link>
      </div>

      <form
        className="header__input"
        type="submit"
        onSubmit={`/search/${inputSearch}`}
      >
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="headerInputButton" />
        </Link>
      </form>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <Avatar
          alt="saimislam"
          src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
        />
      </div>
    </div>
  );
}

export default Header;
