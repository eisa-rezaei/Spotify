import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";

import { RiCheckboxBlankCircleLine, RiPlayMiniFill } from "react-icons/ri";
import { FaLink, FaReact, FaSpotify, FaStar } from "react-icons/fa";
import { TiMediaPause } from "react-icons/ti";

import { GENRES, musics, recent_artists } from "../../data/data";
import user_image from "./../../assets/user-image/avatar10.png";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import selectros from "../../redux/playing/selectors";
import userSelector from "../../redux/user/selectors";
import { setIsPlaying, setMusic } from "../../redux/playing/productActions";
import Layout from "../Layout";
import Gener from "./components/Gener";
import {
  StHomeContainer,
  StHomeGenres,
  StHomeHeader,
  StHomePlaySound,
  StHomePlaySoundInfo,
  StHomeRecentArtists,
  StHomeSearch,
  StHomeSearchInput,
  StHomeSwiperContainer,
  StHomeSwiperSlide,
  StHomeSwiperSlideTag,
  StUserInfoCard,
} from "./styles";

const Home = () => {
  SwiperCore.use(Autoplay);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSize, setIsSize] = useState(window.innerWidth < 700);
  const [isUserInfoCardOpen, setIsUserInfoCOpenard] = useState(false);
  const currentMusic = useSelector(selectros.getMusic);
  const currentUser = useSelector(userSelector.getUser);
  const loadignFetchUser = useSelector((store) => store.user.loading);
  const dispatch = useDispatch();

  const checkSize = () => {
    setIsSize(window.innerWidth < 700);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <Layout>
      <StHomeContainer>
        <StHomeHeader>
          <StHomeSearch>
            <RiCheckboxBlankCircleLine />
            <StHomeSearchInput placeholder="Search ..." />
          </StHomeSearch>
          <span
            onClick={() => {
              dispatch({ type: "SET_USER" });
              setIsUserInfoCOpenard(!isUserInfoCardOpen);
            }}
          >
            <img src={user_image} alt="user-avatar" />
          </span>
          <StUserInfoCard isUserInfoCardOpen={isUserInfoCardOpen}>
            {loadignFetchUser ? (
              <span />
            ) : (
              <>
                <p>
                  watchers : {currentUser.watchers} <FaStar />
                </p>
                <p>
                  Forked : {currentUser.watchers} <FaLink />
                </p>
                <p>
                  Expertise in : {currentUser.language} <FaSpotify />
                </p>
                <p>
                  Expert : {currentUser.name} <FaReact />
                </p>
              </>
            )}
          </StUserInfoCard>
        </StHomeHeader>
        <StHomeSwiperContainer>
          <Swiper
            slidesPerView={isSize ? 1.3 : 3}
            centeredSlides
            loop
            spaceBetween={20}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            autoplay={{ delay: 2000 }}
          >
            {musics.map((music, index) => (
              <SwiperSlide key={music.id}>
                <StHomeSwiperSlide>
                  {activeSlide === index ? (
                    <StHomeSwiperSlideTag>{music.tag}</StHomeSwiperSlideTag>
                  ) : null}
                  <Link to={`/nowplaying/${music.id}`}>
                    <img src={music.image} alt={music.name} />
                  </Link>
                  <StHomePlaySound isActive={activeSlide === index}>
                    <span
                      onClick={() => {
                        if (currentMusic.id === music.id) {
                          dispatch(setIsPlaying(!currentMusic.isPlaying));
                        } else {
                          dispatch(setMusic(music));
                          dispatch(setIsPlaying(true));
                        }
                      }}
                    >
                      {currentMusic.id === music.id &&
                      currentMusic.isPlaying ? (
                        <TiMediaPause />
                      ) : (
                        <RiPlayMiniFill />
                      )}
                    </span>
                    <StHomePlaySoundInfo>
                      <h4>{music.musicName}</h4>
                      <p>{music.artist}</p>
                    </StHomePlaySoundInfo>
                  </StHomePlaySound>
                </StHomeSwiperSlide>
              </SwiperSlide>
            ))}
          </Swiper>
        </StHomeSwiperContainer>
        <h5>Genres :</h5>
        <StHomeGenres>
          {GENRES.map((item, index) => (
            <Gener key={index} item={item} />
          ))}
        </StHomeGenres>
        <h5>Recent Artist</h5>
        <StHomeRecentArtists>
          {recent_artists.map(({ image }, index) => (
            <Link key={index} to="/demo">
              <img src={image} alt="artist" />
            </Link>
          ))}
        </StHomeRecentArtists>
      </StHomeContainer>
    </Layout>
  );
};

export default Home;
