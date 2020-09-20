import React from "react";
import "./HireSection.css";

function HireSection() {
  return (
    <div className="hireSection">
      <div className="hireSection__info">
        <img
          src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3"
          alt=""
        />
        <h1>Hire your technical talent</h1>
        <p>
          We help expand your technical hiring strategy to promote your employer
          brand and highlight relevant open roles to our community of 50 million
          monthly visitors.
        </p>
        <button>Stack Overflow Talent</button>
      </div>
      <div className="hireSection__info">
        <img
          src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02"
          alt=""
        />
        <h1>Reach developers worldwide</h1>
        <p>
          Use the world’s largest resource for people who code to help you
          increase awareness and showcase your product or service across Stack
          Overflow’s network.
        </p>
        <button>Stack Overflow Advertising</button>
      </div>
    </div>
  );
}

export default HireSection;
