import React, { lazy, Suspense, useRef } from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import selectros from "./redux/playing/selectors";

const Error = lazy(() => import("./components/Error"));
const NowPlaying = lazy(() => import("./components/NowPlaying"));
const Home = lazy(() => import("./components/Home"));
const Explore = lazy(() => import("./components/Explore"));
const Igtv = lazy(() => import("./components/Igtv"));
const Microphone = lazy(() => import("./components/Microphone"));
const Time = lazy(() => import("./components/Time"));

function App() {
  const audio = useRef();
  const currentMusic = useSelector(selectros.getMusic)[0];
  return (
    <Suspense fallback={<Loading />}>
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
          <Route path="/nowplaying/:id" exact>
            <NowPlaying />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
      <audio ref={audio} src={currentMusic?.music_src} autoPlay></audio>
    </Suspense>
  );
}
export default App;
