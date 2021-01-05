import React from "react";
import "./MainScreen.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import MainOptionLayout from "./MainOptionLayout";

function MainScreen() {
  return (
    <div className="mainScreen">
      <Router>
        <Switch>
          <Route path="/skills">
            <MainOptionLayout link="Skills">
              <Skills />
            </MainOptionLayout>
          </Route>
          <Route path="/education">
            <MainOptionLayout link="Education">
              <Education />
            </MainOptionLayout>
          </Route>
          <Route path="/experience">
            <MainOptionLayout link="Experience">
              <Experience />
            </MainOptionLayout>
          </Route>
          <Route path="/projects">
            <MainOptionLayout link="Projects">
              <Projects />
            </MainOptionLayout>
          </Route>
          <Route path="/">
            <div className="mainScreen__header">
              <h1>Rishab Baisakh</h1>
              <h2>Web Developer</h2>
            </div>

            <div className="mainScreen__options">
              <ul>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>

                <li>
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MainScreen;
