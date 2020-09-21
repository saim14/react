import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ff3society&tabs=timeline&width=340&height=680&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=745610659534657"
        width="340"
        height="680"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widget;
