import React, {useState, useEffect} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import {RiArrowLeftSLine, RiPlayMiniFill} from "react-icons/ri";
import {MdSkipNext, MdSkipPrevious} from "react-icons/md";
import {SiApplemusic} from "react-icons/si";
import {TiArrowRepeat, TiArrowShuffle, TiMediaPause} from "react-icons/ti";

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
import {musics} from "../../data/data";
import {useDispatch, useSelector} from "react-redux";
import {setIsPlaying, setMusic} from "../../redux/playing/productActions";
import selectros from "../../redux/playing/selectors";

const NowPlaying = () => {
  const {id} = useParams();
  const [currentMusicId, setCurrentMusicId] = useState(parseInt(id));
  const currentMusic = useSelector(selectros.getMusic);
  const dispatch = useDispatch();
  const History = useHistory();

  useEffect(() => {
    const selectedMusic = musics.filter((music) => music.id === currentMusicId);
    dispatch(setMusic(selectedMusic[0]));
    dispatch(setIsPlaying(true));
  }, [currentMusicId, dispatch]);

  const isPlaying = currentMusic?.isPlaying;
  const isEnded = currentMusic?.isEnded;

  useEffect(() => {
    if (isEnded) {
      setCurrentMusicId((prev) => (prev >= musics?.length - 1 ? 0 : prev + 1));
    }
  }, [isEnded]);

  const togglePlayMusic = () => {
    dispatch(setIsPlaying(!isPlaying));
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
          <Link to={`/album/${currentMusic?.id}`}>
            <SiApplemusic />
          </Link>
        </StNowPlayingHeader>
        <StNowPlayingSigner>
          <img src={currentMusic?.image} alt="hello" />
          <StNowPlayingSignerInfo>
            <h3>{currentMusic?.musicName}</h3>
            <h5>{currentMusic?.artist}</h5>
            <p>{currentMusic?.description}</p>
          </StNowPlayingSignerInfo>
        </StNowPlayingSigner>
        <StNowPlayingMusicContainer>
          <StNowPlayingMusic>
            <span>
              <TiArrowShuffle />
            </span>
            <Link to={currentMusicId <= 1 ? musics.length : currentMusicId - 1}>
              <MdSkipPrevious />
            </Link>
            <button onClick={togglePlayMusic}>
              {isPlaying ? <TiMediaPause /> : <RiPlayMiniFill />}
            </button>
            <Link
              to={
                currentMusicId >= musics?.length - 1
                  ? `/nowplaying/1`
                  : `/nowplaying/${currentMusicId + 1}`
              }
            >
              <MdSkipNext />
            </Link>
            <span>
              <TiArrowRepeat />
            </span>
          </StNowPlayingMusic>
          <StNowPlayingMusicProgressBar>
            <p>{timeCalcolator(currentMusic?.currentTime)}</p>
            <input
              type="range"
              value={`${currentMusic?.currentTime}`}
              min="0"
              max={`${currentMusic?.duration}`}
              readOnly
            />
            <p>{timeCalcolator(currentMusic?.duration)}</p>
          </StNowPlayingMusicProgressBar>
        </StNowPlayingMusicContainer>
      </StNowPlayingContainer>
    </Layout>
  );
};

export default NowPlaying;
