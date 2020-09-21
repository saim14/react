import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ReplyIcon from "@material-ui/icons/Reply";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "30%",
    left: "25%",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Post({ id, profilePic, image, username, timestamp, post }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [{ user }] = useStateValue();
  const [input, setInput] = useState(post);

  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
    setInput(post);
  };

  const updatePost = (event) => {
    event.preventDefault();

    db.collection("posts").doc(id).set(
      {
        post: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <div className="post">
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <form className="postModal__form">
            <FormControl>
              <InputLabel>Edit post</InputLabel>
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            </FormControl>
            <Button type="submit" disabled={!input} onClick={updatePost}>
              Update
            </Button>
          </form>
        </div>
      </Modal>
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <div className="post__nameAndUpdate">
            <h3>{username}</h3>
            <div className="post__updateIcons">
              {username === user.displayName && (
                <>
                  <EditIcon onClick={handleOpen} />
                  <DeleteOutlineIcon
                    onClick={(event) => db.collection("posts").doc(id).delete()}
                  />
                </>
              )}
            </div>
          </div>

          <p>
            {new Date(timestamp?.toDate()).toUTCString()}
            &nbsp;
            <PublicIcon className="world" />
          </p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{post}</p>
      </div>
      <div className="post__image">
        {image && <img src={image} alt={`${username}'s post image`} />}
      </div>

      <hr />
      <div className="post__likeBar">
        <div className="post__likeBarContent">
          <ThumbUpAltOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__likeBarContent">
          <ChatBubbleOutlineRoundedIcon />
          <p>Comment</p>
        </div>
        <div className="post__likeBarContent">
          <ReplyIcon className="post__likeBarContentShareIcon" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
