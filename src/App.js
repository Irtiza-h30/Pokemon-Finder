import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Container/Home";
import Pokemon from "./Container/Pokemon";

import "./Styles/app.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon" exact component={Pokemon} />
      </Switch>
    </Router>
  );
}

export default App;
