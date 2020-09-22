import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Jhunee",
      image:
        "https://media-exp1.licdn.com/dms/image/C5103AQGskKOPWqVeMw/profile-displayphoto-shrink_800_800/0?e=1606348800&v=beta&t=mS2gsYUOAKiodr-hwY96dNa73-Cp80hVdBjb4NLIRIU",
      message: "Hi saim!",
    },
    {
      message: "We matched!",
    },
    {
      name: "Jhunee",
      image:
        "https://media-exp1.licdn.com/dms/image/C5103AQGskKOPWqVeMw/profile-displayphoto-shrink_800_800/0?e=1606348800&v=beta&t=mS2gsYUOAKiodr-hwY96dNa73-Cp80hVdBjb4NLIRIU",
      message: "Yeah, we are!",
    },
    {
      name: "Jhunee",
      image:
        "https://media-exp1.licdn.com/dms/image/C5103AQGskKOPWqVeMw/profile-displayphoto-shrink_800_800/0?e=1606348800&v=beta&t=mS2gsYUOAKiodr-hwY96dNa73-Cp80hVdBjb4NLIRIU",
      message: "What's up!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__up">You matched with Jhunee on 11/09/2020</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__messageOthers"> {message.message}</p>{" "}
          </div>
        ) : (
          <p className="chatScreen__messageUser"> {message.message}</p>
        )
      )}

      <form className="chatScreen__form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__input"
          placeholder="Type a message"
        />
        <button onClick={handleSend} className="chatScreen__button">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
