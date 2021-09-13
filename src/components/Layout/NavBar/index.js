import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { IoHeartSharp } from "react-icons/io5";
import { AiTwotoneSound } from "react-icons/ai";
import { HiOutlineDotsHorizontal, HiOutlineDotsVertical } from "react-icons/hi";

import spotify1 from "../../../assets/Logos/spotify2.png";
import spotify2 from "../../../assets/Logos/spotify.png";

import { Link } from "react-router-dom";
import {
  StNavBarContainer,
  StNavBarLinks,
  StNavBarMusicSignerImage,
  StNavBarMusicSignerImagePlay,
  StNavBarSingleLink,
  StNavBarSoundOptions,
} from "./styles";
import { NAVLINKS } from "../../../data/data";
import { useSelector } from "react-redux";
import selectros from "../../../redux/playing/selectors";

const NavBar = () => {
  const location = useLocation();
  const [isSize, setIsSize] = useState(window.innerWidth < 700);

  const currentMusic = useSelector(selectros.getMusic)[0];
  const checkSize = () => {
    setIsSize(window.innerWidth < 700);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

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
        {NAVLINKS.map(({ icon, title, linkSrc }, index) => (
          <Link key={index} to={linkSrc}>
            <StNavBarSingleLink isSameLink={location.pathname === linkSrc}>
              {icon} {isSize ? null : title}
            </StNavBarSingleLink>
          </Link>
        ))}
      </StNavBarLinks>
      <StNavBarSoundOptions>
        <Link to={`/nowplaying/${currentMusic.id - 1}`}>
          <StNavBarMusicSignerImage>
            <img src={currentMusic?.image} alt="artist" />
            <StNavBarMusicSignerImagePlay>
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
        <AiTwotoneSound />
        <span />
        {isSize ? <HiOutlineDotsVertical /> : <HiOutlineDotsHorizontal />}
      </StNavBarSoundOptions>
    </StNavBarContainer>
  );
};

export default NavBar;
