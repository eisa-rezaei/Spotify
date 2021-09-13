import React, { useState, useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { RiArrowLeftSLine, RiPlayMiniFill } from "react-icons/ri";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";
import { TiArrowRepeat, TiArrowShuffle, TiMediaPause } from "react-icons/ti";

import Layout from "../Layout";
import {
  StNowPlayingContainer,
  StNowPlayingHeader,
  StNowPlayingMusic,
  StNowPlayingMusicContainer,
  StNowPlayingMusicProgressBar,
  StNowPlayingSigner,
  StNowPlayingSignerInfo,
} from "./styles";
import { musics } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { setMusic } from "../../redux/playing/productActions";
import selectros from "../../redux/playing/selectors";

const NowPlaying = () => {
  const { id } = useParams();
  const [currentMusicId, setCurrentMusicId] = useState(parseInt(id));
  const currentMusic = useSelector(selectros.getMusic)[0];
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useDispatch();

  const audio = useRef();
  const History = useHistory();

  useEffect(() => {
    const selectedMusic = musics.filter((music) => music.id === currentMusicId);
    dispatch(setMusic(selectedMusic[0]));
  }, [currentMusicId, dispatch]);

  useEffect(() => {
    const time = Math.floor(audio.current.duration);
    setDuration(time);
  }, [audio?.current?.duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = Math.floor(audio.current.currentTime);
      setCurrentTime(time);
    }, 500);
    if (currentTime === duration) {
      setCurrentMusicId(
        currentMusicId >= musics.length ? 0 : currentMusicId + 1
      );
    }
    return () => clearInterval(interval);
  }, [currentMusicId, currentTime, duration]);

  const togglePlayMusic = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  };

  const timeCalcolator = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor((time / 60 - min) * 60);
    if (min < 10 && sec < 10) {
      return `0${min}:0${sec}`;
    } else if (min < 10 && sec > 10) {
      return `0${min}:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  };

  return (
    <Layout>
      <StNowPlayingContainer>
        <StNowPlayingHeader>
          <RiArrowLeftSLine onClick={History.goBack} />
          NowPlaying
          <SiApplemusic />
        </StNowPlayingHeader>
        <StNowPlayingSigner>
          <img src={currentMusic?.image} alt="hello" />
          <StNowPlayingSignerInfo>
            <h3>{currentMusic?.musicName}</h3>
            <h5>{currentMusic?.artist}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              fugiat vel doloribus animi, ratione corrupti nam culpa obcaecati
              debitis dolores accusamus labore, quas dolore illum odit veniam
              voluptate. Sunt, iure. fugiat vel doloribus animi, ratione
              corrupti nam culpa obcaecati debitis dolores accusamus labore,
              quas dolore illum odit veniam voluptate. Sunt, iure. fugiat vel
              doloribus animi, ratione corrupti nam culpa obcaecati debitis
              dolores accusamus labore, quas dolore illum odit veniam voluptate.
              Sunt, iure. fugiat vel doloribus animi, ratione corrupti nam culpa
              obcaecati debitis.
            </p>
          </StNowPlayingSignerInfo>
        </StNowPlayingSigner>
        <StNowPlayingMusicContainer>
          <audio ref={audio} src={currentMusic?.music_src} autoPlay></audio>
          <StNowPlayingMusic>
            <TiArrowShuffle />
            <MdSkipPrevious
              onClick={() => {
                setCurrentMusicId(
                  currentMusicId <= 1 ? musics.length : currentMusicId - 1
                );
              }}
            />
            <span onClick={togglePlayMusic}>
              {isPlaying || currentTime === duration ? (
                <TiMediaPause />
              ) : (
                <RiPlayMiniFill />
              )}
            </span>
            <MdSkipNext
              onClick={() => {
                setCurrentMusicId(
                  currentMusicId >= musics.length ? 0 : currentMusicId + 1
                );
              }}
            />
            <TiArrowRepeat />
          </StNowPlayingMusic>
          <StNowPlayingMusicProgressBar>
            <p>
              {currentTime &&
                audio.current.currentTime &&
                timeCalcolator(currentTime)}
            </p>
            <input
              type="range"
              value={`${currentTime}`}
              min="0"
              max={`${duration}`}
              readOnly
            />
            <p>
              {duration && audio.current.duration && timeCalcolator(duration)}
            </p>
          </StNowPlayingMusicProgressBar>
        </StNowPlayingMusicContainer>
      </StNowPlayingContainer>
    </Layout>
  );
};

export default NowPlaying;
