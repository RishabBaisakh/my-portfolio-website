import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__card">
        <h1>Languages</h1>

        <div className="skills__cardBody">
          <div className="skills__cardTechnology">
            <h2>JavaScript</h2>
            <img src="my-portfolio-website/technologies/js.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>Java</h2>
            <img src="my-portfolio-website/technologies/java.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>C</h2>
            <img src="my-portfolio-website/technologies/c.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>C++</h2>
            <img src="my-portfolio-website/technologies/cpp.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>PHP</h2>
            <img src="my-portfolio-website/technologies/php.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>SQL</h2>
            <img src="my-portfolio-website/technologies/sql.jfif" />
          </div>
        </div>
      </div>

      <div className="skills__card">
        <h1>Frameworks</h1>
        <div className="skills__cardBody">
          <div className="skills__cardTechnology">
            <h2>ReactJS</h2>
            <img src="my-portfolio-website/technologies/react.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>Angular 2+</h2>
            <img src="my-portfolio-website/technologies/angular.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>JQuery</h2>
            <img src="my-portfolio-website/technologies/jquery.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>Unity</h2>
            <img src="my-portfolio-website/technologies/unity.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>Bootstrap</h2>
            <img src="my-portfolio-website/technologies/bootstrap.jfif" />
          </div>
          <div className="skills__cardTechnology">
            <h2>Zend</h2>
            <img src="my-portfolio-website/technologies/zend.png" />
          </div>
        </div>
      </div>

      <div className="skills__card">
        <h1>Database</h1>
        <div className="skills__cardBody">
          <div className="skills__cardTechnology">
            <h2>MySQL</h2>
            <img src="my-portfolio-website/technologies/mysql.png" />
          </div>
          <div className="skills__cardTechnology">
            <h2>Firebase</h2>
            <img src="my-portfolio-website/technologies/firebase.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
