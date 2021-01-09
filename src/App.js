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
import MainScreenLayout from "./MainScreenLayout";

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
              <MainScreenLayout title="Skills">
                <Skills />
              </MainScreenLayout>
            </Route>
            <Route path="/projects">
              <MainScreenLayout title="Projects">
                <Projects />
              </MainScreenLayout>
            </Route>
            <Route path="/education">
              <MainScreenLayout title="Education">
                <Education />
              </MainScreenLayout>
            </Route>
            <Route path="/experience">
              <MainScreenLayout title="Experience">
                <Experience />
              </MainScreenLayout>
            </Route>
            <Route path="/contact">
              <MainScreenLayout title="Get in Touch">
                <Contact />
              </MainScreenLayout>
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
