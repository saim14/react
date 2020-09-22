import React from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <div className="chat__profile">
          <Avatar src={profilePic} alt={name} />
          <div className="chat__desc">
            <h2>{name}</h2>
            <h4>{message}</h4>
          </div>
        </div>

        <div className="chat__timestamp">{timestamp}</div>
      </div>
    </Link>
  );
}

export default Chat;
