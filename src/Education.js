import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education">
      <div className="education__row">
        <h1>Programming and Web Technologies Diploma</h1>
        <a href="https://isi-mtl.com/en/">
          L'institut Supérieur d'Informatique
        </a>
        <p>Quebec, Montreal</p>
      </div>

      <div className="education__row">
        <h1>Bachelor of Engineering in Computer Science</h1>

        <a href="https://vtu.ac.in/">Visvesvaraya Technological University</a>
        <p>Bidar, Karnataka</p>
      </div>
    </div>
  );
}

export default Education;
