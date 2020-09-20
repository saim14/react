import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <h4>Welcome...</h4>
        <img
          className="header__profileImage"
          src="https://instagram.fdac71-1.fna.fbcdn.net/v/t51.2885-15/e35/70308311_168650730976325_912660894183825886_n.jpg?_nc_ht=instagram.fdac71-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=kFeD5ZkqyOUAX9WfFnB&oh=34c16f61d3bec07e132dce6b8235e89f&oe=5F8473B5"
          alt="profile"
        />
      </div>

      <div className="header__nav">
        <div className="header__navContent">
          <a href="#banner">
            <p>Home</p>
          </a>
          <a href="#portfolio">
            <p>Projects</p>
          </a>
          <a href="#certificate">
            <p>Certifications</p>
          </a>
          <a href="#skills">
            <p>Skills</p>
          </a>
        </div>
        <h3>Saim Islam</h3>
      </div>
    </div>
  );
}

export default Header;
