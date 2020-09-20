import React from "react";
import "./Developer.css";
import DeveloperCard from "./DeveloperCard";

function Developer() {
  return (
    <div className="developer">
      <div className="developer__info">
        <h1>For developers, by developers</h1>
        <p className="developer__infoBorder">&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="developer__desc">
          Stack Overflow is an
          <span className="developer__linkText"> open community </span> for
          anyone that codes. We help you get answers to your toughest coding
          questions, share knowledge with your coworkers in private, and find
          your next dream job.
        </p>
      </div>
      <div className="developer__card">
        <DeveloperCard
          image="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f"
          title="Public Q&A"
          desc="Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account."
          buttonInfo="Browse questions"
        />
        <DeveloperCard
          image="https://cdn.sstatic.net/Img/home/jobs.svg?v=931d6c0863ee"
          title="Private Q&A"
          desc="Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine."
          buttonInfo="Try for free"
          orange
        />
        <DeveloperCard
          image="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7"
          title="Browse jobs"
          desc="Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more."
          buttonInfo="Find a job"
        />
      </div>
    </div>
  );
}

export default Developer;
