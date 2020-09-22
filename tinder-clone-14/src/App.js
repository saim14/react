import React from "react";
import "./App.css";
import ButtonBellow from "./ButtonBellow";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chats from "./ChatPage/Chats";
import ChatScreen from "./ChatPage/ChatScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <ButtonBellow />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
