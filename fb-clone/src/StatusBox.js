import React, { useState } from "react";
import "./StatusBox.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function StatusBox() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    //db staff here

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="statusBox">
      <div className="statusBox__top">
        <Avatar src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="statusBox__input"
            placeholder="What's on your mind"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="statusBox__bottom">
        <div className="statusBox__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="statusBox__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="statusBox__option">
          <PhotoLibraryIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default StatusBox;
