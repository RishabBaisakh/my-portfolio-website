import React from "react";
import "./Welcome.css";
import { Animated } from "react-animated-css";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <Animated animationIn="bounceInLeft" isVisible={true}>
          <h1 className="animate__animated animate__bounce">
            Hi, I am Rishab,
            <br /> I build UIs you visualize.
          </h1>
        </Animated>
      </div>
      <div className="welcome__shortDescription">
        <Animated animationIn="bounceInUp" isVisible={true}>
          <p>
            Web Developer, Mobile and Game Development enthusiast.
            <br /> I love mathematics and solving complex algorithms.
            <br />I have worked over various technologies over the years, and
            possess good problem solving skills.
          </p>
        </Animated>
      </div>
      <div className="welcome__resume">
        <Animated animationIn="slideInRight" isVisible={true}>
          <a
            href="/my-portfolio-website/RishabBaisakhResume.pdf"
            target="_blank"
          >
            Check out my resume
          </a>
        </Animated>
      </div>
    </div>
  );
}

export default Welcome;
