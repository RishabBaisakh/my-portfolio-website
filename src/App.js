import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
