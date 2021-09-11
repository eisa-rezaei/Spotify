import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Explore from "./components/Explore";
import Home from "./components/Home";
import Igtv from "./components/Igtv";
import Microphone from "./components/Microphone";
import Time from "./components/Time";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/microphone" exact>
          <Microphone />
        </Route>
        <Route path="/time" exact>
          <Time />
        </Route>
        <Route path="/igtv" exact>
          <Igtv />
        </Route>
        <Route path="/explore" exact>
          <Explore />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
