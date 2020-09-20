import React from "react";
import "./App__banner.css";

function App__banner() {
  return (
    <div className="app__banner" id="banner">
      <div className="app__bannerLinkedin">
        <a target="_blank" href="https://www.linkedin.com/in/saimislam/">
          <center>
            <img
              className="app__bannerImage"
              src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Flinkedinprofile.PNG?alt=media&token=bb0f08a3-f66c-453a-89e6-2c161d580a90"
            />

            <h2>LinkedIn Profile</h2>
          </center>
        </a>
      </div>
      <div className="app__me">
        <div className="app__meleft">
          <h3>Who am I</h3>
          <h4>Professional identity</h4>
          <p>
            📙Computer Programmer <br /> <br />
            📙Business Developer <br /> <br />
            📙Project Manager
          </p>
        </div>
        <div className="app__mecenter">
          <h4>Personal identity</h4>
          <p>
            📙Intuitive <br /> <br />
            📙Quick Learner <br /> <br />
            📙Pattern Recognizer
          </p>
        </div>
        <div className="app__meright">
          <h4>About Me</h4>

          <p>
            Currently I am working on my own projects,doing freelance work,
            developing skills and exploring wisdom. I Love to <br />
            📙Talk to people to better understanding of human mind and their
            sociocultural organizational structures. <br />
            📙Explore and learn new technology to become up to date.
            <br />
            📙Finding the big picture of story/event to know what to prior.
            <br />
            📙Solving problems, I care. <br />
            Besides these, I am a book worm and lover of literature.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App__banner;
