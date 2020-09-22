import React from "react";
import "./Header.css";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__peopleIcon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonRoundedIcon className="header__peopleIcon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FTinder-Logo.png?alt=media&token=1eed21cd-e76a-41db-9377-aad51be7fcf7"
          alt="logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ChatBubbleRoundedIcon className="header__messageIcon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
