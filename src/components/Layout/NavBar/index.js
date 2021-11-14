import React, {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router";

import {IoHeartSharp} from "react-icons/io5";
import {AiTwotoneSound} from "react-icons/ai";
import {HiOutlineDotsHorizontal, HiOutlineDotsVertical} from "react-icons/hi";

import spotify1 from "../../../assets/Logos/spotify2.png";
import spotify2 from "../../../assets/Logos/spotify.png";

import {Link} from "react-router-dom";
import {
  StNavBarContainer,
  StNavBarLinks,
  StNavBarMusicSignerImage,
  StNavBarMusicSignerImagePlay,
  StNavBarSingleLink,
  StNavBarSoundOptions,
} from "./styles";
import {NAVLINKS} from "../../../data/data";
import {useSelector} from "react-redux";
import selectros from "../../../redux/playing/selectors";
import {useDispatch} from "react-redux";
import {setVolume} from "../../../redux/playing/productActions";

const NavBar = () => {
  const location = useLocation();
  const [isSize, setIsSize] = useState(window.innerWidth < 700);
  const volumeRef = useRef();
  const dispatch = useDispatch();
  const volume = volumeRef?.current?.value;

  const checkSize = () => {
    setIsSize(window.innerWidth < 700);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);
  const currentMusic = useSelector(selectros.getMusic);

  const volumeChangeHandler = () => {
    dispatch(setVolume(volume));
  };

  const volumeOffHandler = () => {
    if (volume > 5) {
      dispatch(setVolume(0));
    } else {
      dispatch(setVolume(10));
    }
  };

  return (
    <StNavBarContainer>
      <StNavBarLinks>
        <Link to="/">
          {isSize ? (
            <img src={spotify1} alt="Sporify" />
          ) : (
            <img src={spotify2} alt="Sporify" />
          )}
        </Link>
        {NAVLINKS.map(({icon, title, linkSrc}, index) => (
          <Link key={index} to={linkSrc}>
            <StNavBarSingleLink isSameLink={location.pathname === linkSrc}>
              {icon} {isSize ? null : title}
            </StNavBarSingleLink>
          </Link>
        ))}
      </StNavBarLinks>
      <StNavBarSoundOptions>
        <Link to={currentMusic.id ? `/nowplaying/${currentMusic?.id}` : `/`}>
          <StNavBarMusicSignerImage>
            <img src={currentMusic?.image} alt="artist" />
            <StNavBarMusicSignerImagePlay isPlaying={currentMusic?.isPlaying}>
              <p />
              <p />
              <p />
              <p />
              <p />
              <p />
              <p />
            </StNavBarMusicSignerImagePlay>
          </StNavBarMusicSignerImage>
        </Link>
        <IoHeartSharp />
        <AiTwotoneSound onClick={volumeOffHandler} />
        <input
          type="range"
          min="0"
          max="10"
          readOnly
          onChange={volumeChangeHandler}
          ref={volumeRef}
        />
        {isSize ? <HiOutlineDotsVertical /> : <HiOutlineDotsHorizontal />}
      </StNavBarSoundOptions>
    </StNavBarContainer>
  );
};

export default NavBar;
