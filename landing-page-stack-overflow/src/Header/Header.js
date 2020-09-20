import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__img"
          src="https://cdn.sstatic.net/Sites/stackoverflow/company/Img/logos/so/so-logo.svg?v=a010291124bf"
          alt="logo"
        />
        <p>About</p>
        <p>Products</p>
        <p>For Terms</p>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search..." />
      </div>
      <div className="header__right">
        <button className="header__login">Login</button>
        <button className="header__signup">Sign up </button>
      </div>
    </div>
  );
}

export default Header;
