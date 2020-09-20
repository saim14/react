import React from "react";
import "./Job.css";
import JobCard from "./JobCard";

function Job() {
  return (
    <div className="job">
      <h1>Looking for a job?</h1>
      <div className="job__info">
        <div className="job__cards">
          <JobCard
            image="https://cdn.sstatic.net/Img/home/jobs-tech.svg?v=42f011c01763"
            desc="Browse jobs by technology"
          />

          <JobCard
            image="https://cdn.sstatic.net/Img/home/jobs-salary.svg?v=401840ff8931"
            desc="Browse jobs by salary"
          />

          <JobCard
            image="https://cdn.sstatic.net/Img/home/jobs-visa.svg?v=1f3acc6dc772"
            desc="Browse jobs by visa sponsorship"
          />

          <JobCard
            image="https://cdn.sstatic.net/Img/home/jobs-remote.svg?v=a4b4d1b5a80c"
            desc="
Browse remote-friendly jobs"
          />
        </div>
        <button>View all jobs</button>
      </div>
      <div className="job__robot"></div>
    </div>
  );
}

export default Job;
