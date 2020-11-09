import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "View/Feed";

import "Styles/reset.scss";
import "Styles/global.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Feed} exact path="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
