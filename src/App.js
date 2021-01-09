import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import "./App.css";
import Sidebar from "./Sidebar";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__sidebar">
          <Sidebar />
        </div>
        <div className="app__body">
          <Switch>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
