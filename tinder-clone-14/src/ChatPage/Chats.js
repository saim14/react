import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Jhunee"
        message="What's up!"
        timestamp="40 seconds ago"
        profilePic="https://media-exp1.licdn.com/dms/image/C5103AQGskKOPWqVeMw/profile-displayphoto-shrink_800_800/0?e=1606348800&v=beta&t=mS2gsYUOAKiodr-hwY96dNa73-Cp80hVdBjb4NLIRIU"
      />

      <Chat
        name="Subhita"
        message="Hey Saim, how are u!"
        timestamp="20 minutes ago"
        profilePic="https://media-exp1.licdn.com/dms/image/C5103AQEAAWFkNfPfuA/profile-displayphoto-shrink_800_800/0?e=1606348800&v=beta&t=wCgMZ4jMJCx7DH4EvXV0Va5q1BqLS7Ymcx-TNuwnAXM"
      />

      <Chat
        name="Jasmeen Parmar"
        message="Hi <3 "
        timestamp="1 day ago"
        profilePic="https://media-exp1.licdn.com/dms/image/C5603AQF-hvGcOWLFLw/profile-displayphoto-shrink_800_800/0?e=1606348800&v=beta&t=5bR5jynDC8qf_67WoNOxbEGCQe9R8jEbJFr0uGHUMfk"
      />

      <Chat
        name="Abhirami  "
        message="Are u there?"
        timestamp="30 days ago"
        profilePic="https://media-exp1.licdn.com/dms/image/C4E03AQGtSNEiNbZUUw/profile-displayphoto-shrink_800_800/0?e=1606348800&v=beta&t=XtNWD8J2irtZHDQ_s9qtz31jgoH_EOTGTo6LmRkc05Y"
      />
    </div>
  );
}

export default Chats;
