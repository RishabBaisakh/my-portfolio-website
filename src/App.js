import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Experience from "./Education";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/skills/">
            <Skills />
          </Route>
          <Route path="/education/">
            <Education />
          </Route>
          <Route path="/experience/">
            <Experience />
          </Route>
          <Route path="/work/">
            <Work />
          </Route>
          <Route>
            <Contact />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
