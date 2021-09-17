import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsPlaying,
  setMusic,
} from "../../../../redux/playing/productActions";
import selectros from "../../../../redux/playing/selectors";
import {
  StAlbumArtistMusic,
  StAlbumArtistMusicCurrentProgress,
  StAlbumArtistMusicEdit,
  StAlbumMusicPlay,
} from "./styles";

const SingleMusic = (props) => {
  const currentMusic = useSelector(selectros.getMusic);
  const [isMusicEditOpen, setIsMusicEditOpen] = useState(false);
  const dispatch = useDispatch();
  const { musicName, id, artist, index, duration } = props;
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
    <StAlbumArtistMusic>
      <span
        onClick={() => {
          dispatch(setMusic(props));
          dispatch(setIsPlaying(true));
        }}
      >
        {currentMusic.id === id ? (
          <>
            <StAlbumMusicPlay>
              <p />
              <p />
              <p />
            </StAlbumMusicPlay>
            <StAlbumArtistMusicCurrentProgress
              currentTime={Math.floor(
                (currentMusic?.currentTime / currentMusic?.duration) * 100
              )}
            />
          </>
        ) : (
          <h3>
            {index > 10 ? null : `0`}
            {index}
          </h3>
        )}
        <p>
          {musicName} <br /> {artist}&nbsp;
          {timeCalcolator(duration)}
        </p>
      </span>
      <StAlbumArtistMusicEdit isMusicEditOpen={isMusicEditOpen}>
        <FaHeart />
        <input type="range" min="0" max="10" readOnly />
      </StAlbumArtistMusicEdit>
      <HiDotsHorizontal onClick={() => setIsMusicEditOpen(!isMusicEditOpen)} />
    </StAlbumArtistMusic>
  );
};

export default SingleMusic;
