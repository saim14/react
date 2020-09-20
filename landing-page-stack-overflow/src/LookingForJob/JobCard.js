import React from "react";
import "./JobCard.css";

function JobCard({ image, desc }) {
  return (
    <div className="jobCard">
      <img src={image} alt="" />
      <p>{desc}</p>
    </div>
  );
}

export default JobCard;
