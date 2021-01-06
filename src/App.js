import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Welcome from "./Welcome";
import "./App.css";
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
