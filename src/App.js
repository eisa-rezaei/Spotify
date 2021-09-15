import React, { lazy, Suspense, useRef, useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DemoPage from "./components/DemoPage";
import Loading from "./components/Loading";
import {
  setCurrentTime,
  setDuration,
  setIsEnded,
} from "./redux/playing/productActions";
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
  const currentMusic = useSelector(selectros.getMusic);
  const [isPlaying, setIsPlaying] = useState(true);
  const dispatch = useDispatch();

  const time = audio?.current?.duration;
  const currentTime = audio?.current?.currentTime;
  const isEnded = audio?.current?.ended;
  const volume = currentMusic?.volume / 10;

  useEffect(() => {
    dispatch(setDuration(time));
    const interval = setInterval(() => {
      dispatch(setCurrentTime(currentTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch, time, currentTime]);

  useEffect(() => {
    setIsPlaying(currentMusic?.isPlaying);
    if (isPlaying) {
      audio?.current?.play();
    } else {
      audio?.current?.pause();
    }
  }, [isPlaying, currentMusic?.isPlaying]);

  useEffect(() => {
    dispatch(setIsEnded(isEnded));
  }, [dispatch, isEnded]);

  useEffect(() => {
    audio.current.volume = volume ? volume : 1;
  }, [volume, isPlaying]);

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
          <Route path="/demo" exact>
            <DemoPage />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
      <audio
        ref={audio}
        src={currentMusic?.music_src}
        autoPlay
        id="audio"
      ></audio>
    </Suspense>
  );
}
export default App;
