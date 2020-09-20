import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post({ profilePic, image, username, timestamp, post }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
      </div>
      <div className="post__topInfo">
        <h3>{username}</h3>
        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
      </div>
      <div className="post__bottom">
        <p>{post}</p>
      </div>
      <div className="post__image">
        <img src={image} alt={`${username}'s post image`} />
      </div>
    </div>
  );
}

export default Post;
