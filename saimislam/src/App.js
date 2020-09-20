import React from "react";
import "./App.css";
import Header from "./Header";
import Certificate from "./Certificate";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App__portfolio from "./App__portfolio";
import App__banner from "./App__banner";
import Footer from "./Footer";
import Skills from "./Skills";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <App__banner />
        <App__portfolio />
        <Certificate />
        <Skills />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
