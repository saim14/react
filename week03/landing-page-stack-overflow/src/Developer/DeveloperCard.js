import React from "react";
import "./DeveloperCard.css";

function DeveloperCard({ image, title, desc, buttonInfo, orange }) {
  return (
    <>
      {orange ? (
        <div className="developerCard__orange">
          <img src={image} alt="nothing" />
          <h1>{title}</h1>
          <p>{desc}</p>
          <button className="developerCard__orangeButton">{buttonInfo}</button>
        </div>
      ) : (
        <div className="developerCard__purple">
          <img src={image} alt="nothing" />
          <h1>{title}</h1>
          <p>{desc}</p>
          <button className="developerCard__purpleButton">{buttonInfo}</button>
        </div>
      )}
    </>
  );
}

export default DeveloperCard;
