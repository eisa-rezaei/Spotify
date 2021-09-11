import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
const Error = lazy(() => import("./components/Error"));
const Home = lazy(() => import("./components/Home"));
const Explore = lazy(() => import("./components/Explore"));
const Igtv = lazy(() => import("./components/Igtv"));
const Microphone = lazy(() => import("./components/Microphone"));
const Time = lazy(() => import("./components/Time"));

function App() {
  return (
    <Suspense fallback={<h1>you know this is a loading right?</h1>}>
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
    </Suspense>
  );
}
export default App;
