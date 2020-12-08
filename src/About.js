import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__header">
        <div className="about__headerPhoto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgE1IE05AFFwIATzwHb2rQPgMDY7vT6eq7w&usqp=CAU"
            alt=""
          />
        </div>

        <div className="about__headerDetails">
          <h1>Rishab Baisakh</h1>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default About;
