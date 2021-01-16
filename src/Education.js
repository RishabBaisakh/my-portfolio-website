import React from "react";
import "./Education.css";
import { Animated } from "react-animated-css";

function Education() {
  return (
    <div className="education">
      <Animated animationIn="slideInRight">
        <div className="education__row myCardLayout">
          <div className="education__rowHeader">
            <h1>Programming and Web Technologies Diploma</h1>
            <h1>(2019 - Present)</h1>
          </div>
          <a href="https://isi-mtl.com/en/">
            L'institut Supérieur d'Informatique
          </a>
          <p>Quebec, Montreal</p>
        </div>
      </Animated>

      <Animated animationIn="slideInRight" animationInDelay={300}>
        <div className="education__row myCardLayout">
          <div className="education__rowHeader">
            <h1>Bachelor of Engineering in Computer Science</h1>
            <h1>(2014 - 2018)</h1>
          </div>
          <a href="https://vtu.ac.in/">Visvesvaraya Technological University</a>
          <p>Bidar, Karnataka</p>
        </div>
      </Animated>
    </div>
  );
}

export default Education;
