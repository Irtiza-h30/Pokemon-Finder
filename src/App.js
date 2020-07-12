import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Container/Home/index";
import Pokemon from "./Container/Pokemon/index";

import "./Styles/app.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Pokemon" component={Pokemon} />
      </Switch>
    </Router>
  );
}

export default App;
