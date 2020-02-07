import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { createHistory as history } from "history";
import Home from "./home";
import Dashboard from "./dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
