import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RiArrowLeftSLine, RiPlayMiniFill } from "react-icons/ri";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";
import { TiArrowRepeat, TiArrowShuffle, TiMediaPause } from "react-icons/ti";

import ArtistImage from "./../../assets/recent-artists/artist-icon.png";
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

const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audio = useRef();
  const History = useHistory();

  useEffect(() => {
    const time = Math.floor(audio.current.duration);
    setDuration(time);
  }, [audio?.current?.duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = Math.floor(audio.current.currentTime);
      setCurrentTime(time);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const togglePlayMusic = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
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
          <img src={ArtistImage} alt="hello" />
          <StNowPlayingSignerInfo>
            <h3>I will be Here</h3>
            <h5>Tiesto</h5>
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
          <audio ref={audio}>
            <source src={musics[0].music_src} />
          </audio>
          <StNowPlayingMusic>
            <TiArrowShuffle />
            <MdSkipPrevious />
            <span onClick={togglePlayMusic}>
              {isPlaying ? <TiMediaPause /> : <RiPlayMiniFill />}
            </span>
            <MdSkipNext />
            <TiArrowRepeat />
          </StNowPlayingMusic>
          <StNowPlayingMusicProgressBar>
            <p>
              {duration && audio.current.duration && timeCalcolator(duration)}
            </p>
            <input
              type="range"
              value={`${currentTime}`}
              min="0"
              max={`${duration}`}
              readOnly
            />
            <p>
              {currentTime &&
                audio.current.currentTime &&
                timeCalcolator(currentTime)}
            </p>
          </StNowPlayingMusicProgressBar>
        </StNowPlayingMusicContainer>
      </StNowPlayingContainer>
    </Layout>
  );
};

export default NowPlaying;
