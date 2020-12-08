import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Experience from "./Education";
import Contact from "./Contact";
import Sidebar from "./Sidebar";

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
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
