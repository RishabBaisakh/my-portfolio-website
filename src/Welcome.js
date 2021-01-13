import React from "react";
import "./Welcome.css";
import MenuIcon from "@material-ui/icons/Menu";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <h1 className="animate__animated animate__bounce">
          Hi, I am Rishab,
          <br /> I build UIs you visualize.
        </h1>
      </div>
      <div className="welcome__shortDescription">
        <p>
          Web Developer, Mobile and Game Development enthusiast.
          <br /> I love mathematics and solving complex algorithms.
          <br />I have worked over various technologies over the years, and
          possess good problem solving skills.
        </p>
      </div>
      <div className="welcome__resume">
        <a href="my-portfolio-website/RishabBaisakhResume.pdf" target="_blank">
          Check out my resume
        </a>
      </div>
    </div>
  );
}

export default Welcome;
