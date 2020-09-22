import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__image">
        <div className="banner__info">
          <h1>
            We <span className="banner__infoLove">&#60;</span>3 people who code{" "}
          </h1>
          <p>
            We build products that empower developers and connect them to
            solutions that enable productivity, growth, and discovery.
          </p>
        </div>
        <div className="banner__button">
          <button className="banner__developerButton">For developers</button>
          <button className="banner__businessButton">For business</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
