import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png" />
      <div className="footer__section1">
        <h3>STACK OVERFLOW</h3>
        <p>Questions</p>
        <p>Jobs</p>
        <p>Developers Jobs Directory</p>
        <p>Help</p>
        <p>Mobile</p>
        <p>Disable Responsiveness</p>
      </div>
      <div className="footer__section1">
        <h3>Products</h3>
        <p>Teams</p>
        <p>Talent</p>
        <p>Advertising</p>
        <p>Enterprice</p>
      </div>
      <div className="footer__section1">
        <h3>Company</h3>
        <p>About</p>
        <p>Press</p>
        <p>Work Here</p>
        <p>Legal</p>
        <p></p>
      </div>
      <div className="footer__section1">
        <h3>Stack Exchange</h3>
        <p>Technology</p>
        <p>Life / Arts</p>
        <p>Culture / Recreation</p>
        <p>Science</p>
        <p>Others</p>
      </div>
      <p>
        site design / logo © 2020 Stack Exchange Inc; user contributions
        licensed under cc by-sa. rev 2020.9.17.37632
      </p>
    </div>
  );
}

export default Footer;
