import React from "react";
import "./ButtonBellow.css";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function ButtonBellow() {
  return (
    <div className="buttonBellow">
      <ReplayRoundedIcon className="buttonBellow__reload" />
      <CloseRoundedIcon className="buttonBellow__close" />
      <StarRoundedIcon className="buttonBellow__star" />
      <FavoriteRoundedIcon className="buttonBellow__love" />
      <FlashOnIcon className="buttonBellow__flash" />
    </div>
  );
}

export default ButtonBellow;
