import React from "react";
import "./App__portfolio.css";
function App__portfolio() {
  return (
    <div className="app__portfolio">
      <h2 id="portfolio">Projects [Web App]</h2>
      <div className="app__portfolioImages">
        <a target="_blank" href="https://covid-19-tracker-saim.web.app/">
          <div className="app__portfolioImage">
            <img src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Fcovid-19-tracker.PNG?alt=media&token=4b97ec4b-320a-410d-bd68-cb42d32f7f84" />
            <h4>Covid-19-Tracker</h4>
          </div>
        </a>
        <a target="_blank" href="https://airbnb-clone-69644.web.app/">
          <div className="app__portfolioImage">
            <img src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Fairbnb2.PNG?alt=media&token=5e171c7d-43da-41b6-acc9-adb23df0b1c5" />
            <h4>Airbnb-Clone</h4>
          </div>
        </a>
        <a target="_blank" href="https://hulu-clone-6be96.web.app">
          <div className="app__portfolioImage">
            <img src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Fhulu-clone.PNG?alt=media&token=e514254e-fb1b-476f-b0c3-0da197d01343" />
            <h4>hulu-Clone</h4>
          </div>
        </a>
        <a target="_blank" href="https://atoz-clone-14.web.app/">
          <div className="app__portfolioImage">
            <img src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Famazon-clone.PNG?alt=media&token=836b08c2-fc92-4a93-aa45-882c9894eb9e" />
            <h4>Amazon-clone</h4>
          </div>
        </a>
      </div>
      {/* Second row*/}

      <div className="app__portfolioImages">
        <a target="_blank" href="https://ig-clone-14.web.app">
          <div className="app__portfolioImage">
            <img src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Fig-clone.PNG?alt=media&token=40fa25a0-5547-4892-a9b9-206c7431a334" />
            <h4>Instagram-Clone</h4>
          </div>
        </a>
        <a target="_blank" href="https://atoz-clone-14.web.app/login">
          <div className="app__portfolioImage">
            <img src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Fatozsignin.PNG?alt=media&token=11dbef4c-5f13-45e9-89c6-cc2ab280331d" />
            <h4>Amazon-SignIn-clone</h4>
          </div>
        </a>
        <a
          target="_blank"
          href="https://facebook-messenger-clone-saim.web.app/"
        >
          <div className="app__portfolioImage">
            <img src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Ffb-messenger.PNG?alt=media&token=0e4620a5-1cd7-4b57-9bd0-b2310ef780fb" />
            <h4>Messenger-Clone</h4>
          </div>
        </a>
        <a target="_blank" href="https://todo-app-saim.web.app">
          <div className="app__portfolioImage">
            <img src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2Ftodo.PNG?alt=media&token=f038c467-d135-47ef-848c-2f797db407f8" />
            <h4>CRUD Todo App</h4>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App__portfolio;
