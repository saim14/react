import React from "react";
import "./Business.css";
function Business() {
  return (
    <div className="business">
      <div className="business__info">
        <h1>For businesses, by developers</h1>
        <p className="business__infoBorder">&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="business__desc">
          Our mission is to help developers write the script of the future. This
          means helping you find and hire skilled developers for your business
          and providing them the tools they need to share knowledge and work
          effectively.
        </p>
      </div>
      <div className="business__cards">
        <div className="business__card">
          <img
            src="https://cdn.sstatic.net/Img/home/private-questions.svg?v=a4f1cfb08f7e"
            alt=""
          />
          <p>
            Quickly find and share internal knowledge with{" "}
            <span>Private Q&A</span>{" "}
          </p>
        </div>
        <div className="business__card">
          <img
            src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3"
            alt=""
          />
          <p>
            Find the perfect candidate for your growing technical team with{" "}
            <span> Talent solutions </span>
          </p>
        </div>
        <div className="business__card">
          <img
            src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02"
            alt=""
          />
          <p>
            Accelerate the discovery of your products or services through our{" "}
            <span> Advertising platform </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Business;
