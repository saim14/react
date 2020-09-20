import React from "react";
import "./Video.css";
import Avatar from "@material-ui/core/Avatar";

function Video({ image, title, channel, timestamp, views, channelImage }) {
  return (
    <div className="video">
      <img src={image} alt={title} />
      <div className="video__info">
        <Avatar className="video__avatar" alt={channel} src={channelImage} />
        <div className="video__text">
          <h4>{title} </h4>
          <p>{channel} </p>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
