import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import StatusBox from "./StatusBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <StatusBox />
      <Post
        profilePic="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Fmain_logo.png?alt=media&token=db944f9c-d164-4989-a195-e048e7467c8b"
        image="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Fmain_logo.png?alt=media&token=db944f9c-d164-4989-a195-e048e7467c8b"
        username="F3 Society"
        post="My profile picture"
      />
    </div>
  );
}

export default Feed;
