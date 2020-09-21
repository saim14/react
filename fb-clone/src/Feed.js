import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import StatusBox from "./StatusBox";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <StatusBox />

      {posts.map((post) => (
        <Post
          id={post.id}
          timestamp={post.data.timestamp}
          key={post.data.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          username={post.data.username}
          post={post.data.post}
        />
      ))}
    </div>
  );
}

export default Feed;
