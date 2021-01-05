import React from "react";
import "./Welcome.css";
import MenuIcon from "@material-ui/icons/Menu";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__menu">
        <h1>{"</>"}</h1>
        <MenuIcon />
      </div>

      <div className="welcome__text">
        <h1>
          Hi, I am Rishab.
          <br /> I build UIs you visualize.
        </h1>
      </div>
    </div>
  );
}

export default Welcome;
