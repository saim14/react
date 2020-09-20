import React from "react";
import "./VideoRow.css";

function VideoRow({ views, subs, desc, channel, title, image, timestamp }) {
  return (
    <div className="videoRow">
      <img src={image} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} •{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber"> {subs}</span>
            Subscriber
          </span>
          {views} views • {timestamp}
        </p>
        <p className="videoRow__desc">{desc}</p>
      </div>
    </div>
  );
}

export default VideoRow;
