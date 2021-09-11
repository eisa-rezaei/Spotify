import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { FaHome, FaMicrophoneAlt } from "react-icons/fa";
import { IoHeartSharp, IoTime } from "react-icons/io5";
import { SiOpenstreetmap } from "react-icons/si";
import { AiTwotoneSound } from "react-icons/ai";
import { IoIosCompass } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import spotify1 from "../../../assets/Logos/spotify2.png";
import spotify2 from "../../../assets/Logos/spotify.png";

import { Link } from "react-router-dom";
import {
  StNavBarContainer,
  StNavBarLinks,
  StNavBarSingleLink,
  StNavBarSoundOptions,
} from "./styles";

const NAVLINKS = [
  { icon: <FaHome />, title: "Home", linkSrc: "/" },
  { icon: <IoIosCompass />, title: "Explore", linkSrc: "/explore" },
  { icon: <SiOpenstreetmap />, title: "IGTV", linkSrc: "/igtv" },
  { icon: <FaMicrophoneAlt />, title: "Microphone", linkSrc: "/microphone" },
  { icon: <IoTime />, title: "Time", linkSrc: "/time" },
];

const NavBar = () => {
  const location = useLocation();
  const [isSize, setIsSize] = useState(window.innerWidth < 700);

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
        hello
        <IoHeartSharp />
        <AiTwotoneSound />
        <span />
        <HiOutlineDotsHorizontal />
      </StNavBarSoundOptions>
    </StNavBarContainer>
  );
};

export default NavBar;
