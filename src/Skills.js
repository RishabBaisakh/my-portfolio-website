import React from "react";
import "./Skills.css";
import { Animated } from "react-animated-css";

function Skills() {
  let delay = 100;

  const languages = [
    {
      name: "JavaScript",
      image: "js.png",
    },
    {
      name: "Java",
      image: "java.png",
    },
    {
      name: "SQL",
      image: "sql.jfif",
    },
    {
      name: "C",
      image: "c.png",
    },
    {
      name: "C++",
      image: "cpp.png",
    },
    {
      name: "PHP",
      image: "php.png",
    },
  ];

  const frameworks = [
    {
      name: "ReactJS",
      image: "react.png",
    },
    {
      name: "Angular 2+",
      image: "angular.png",
    },
    {
      name: "JQuery",
      image: "jquery.png",
    },
    {
      name: "Unity",
      image: "unity.png",
    },
    {
      name: "Bootstrap",
      image: "bootstrap.jfif",
    },
    {
      name: "Zend",
      image: "zend.png",
    },
  ];

  const databases = [
    {
      name: "MySql",
      image: "mysql.png",
    },
    {
      name: "Firebase",
      image: "firebase.png",
    },
  ];

  return (
    <div className="skills">
      <div className="skills__card">
        <h1>Languages</h1>

        <div className="skills__cardBody">
          {languages.map((language, index) => (
            <Animated
              key={index}
              animationIn="fadeIn"
              isVisible={true}
              animationInDelay={`${(delay += 150)}`}
            >
              <div className="skills__cardTechnology">
                <h2>{language.name}</h2>
                <img
                  src={`my-portfolio-website/technologies/${language.image}`}
                />
              </div>
            </Animated>
          ))}
        </div>
      </div>

      <div className="skills__card">
        <h1>Frameworks</h1>
        <div className="skills__cardBody">
          {frameworks.map((framework, index) => (
            <Animated
              key={index}
              animationIn="fadeIn"
              isVisible={true}
              animationInDelay={`${(delay += 150)}`}
            >
              <div className="skills__cardTechnology">
                <h2>{framework.name}</h2>
                <img
                  src={`my-portfolio-website/technologies/${framework.image}`}
                />
              </div>
            </Animated>
          ))}
        </div>
      </div>

      <div className="skills__card">
        <h1>Database</h1>
        <div className="skills__cardBody">
          {databases.map((database, index) => (
            <Animated
              key={index}
              animationIn="fadeIn"
              isVisible={true}
              animationInDelay={`${(delay += 150)}`}
            >
              <div className="skills__cardTechnology">
                <h2>{database.name}</h2>
                <img
                  src={`my-portfolio-website/technologies/${database.image}`}
                />
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
