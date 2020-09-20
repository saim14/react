import React, { useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import { useEffect } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetais, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetais?.name} </strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ message, user, timestamp, userImage }) => (
          <Message
            message={message}
            user={user}
            timestamp={timestamp}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetais?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
