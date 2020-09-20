import React from "react";
import "./Certificate.css";

function Certificate() {
  return (
    <div className="certificate" id="certificate">
      <h2>Certifications</h2>
      <div className="certificate__top">
        <a
          target="_blank"
          href="https://www.coursera.org/account/accomplishments/specialization/certificate/D78SVE3YU53X"
        >
          <div className="certificate__imgAndTitle">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIBM%20Cybersecurity%20Analyst%20Specialization%20Coursera%20D78SVE3YU53X-1.jpg?alt=media&token=c8a5ea38-51de-4dd2-9ed7-45d407d9f223"
              alt="ibmcertificate"
            />
            <h3>IBM Cybersecurity Analyst Specialization</h3>
          </div>
        </a>

        <a
          target="_blank"
          href="https://www.coursera.org/account/accomplishments/specialization/certificate/JS83EESEYF2X"
        >
          <div className="certificate__imgAndTitle">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FProject%20Management%20Principles%20and%20Practices%20Specialization_Coursera%20JS83EESEYF2X-1.jpg?alt=media&token=b7ae0def-b5a7-4939-9f30-cf5827f652ba"
              alt="pmcertificate"
            />
            <h3>Project Management Principles and Practices Specialization</h3>
          </div>
        </a>

        <a
          target="_blank"
          href="https://www.coursera.org/account/accomplishments/specialization/certificate/WQ6TY4MFMRHF"
        >
          <div className="certificate__imgAndTitle">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FAI_Foundation_for_Everyone_Coursera%20WQ6TY4MFMRHF-1.jpg?alt=media&token=b8ad60c6-7ac5-44f4-b319-ea9288e4585d"
              alt="AIcert"
            />
            <h3>AI Foundations for Everyone Specialization</h3>
          </div>
        </a>

        <a
          target="_blank"
          href="https://www.udemy.com/certificate/UC-WVAVQO3F/"
        >
          <div className="certificate__imgAndTitle">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FUC-WVAVQO3F.jpg?alt=media&token=ce2d4de6-5ad6-4749-95d6-481931e7bee2"
              alt="DataScience"
            />
            <h3>
              The Data Science Course 2019: Complete Data Science Bootcamp
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Certificate;
