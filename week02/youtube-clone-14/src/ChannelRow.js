import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar src={image} alt="channelImage" className="channelRow__logo" />
      <div className="channeRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineIcon />}
        </h4>
        <p>
          {subs} subscriber • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
