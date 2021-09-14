import React, { useEffect, useState } from "react";
import { RiCheckboxBlankCircleLine, RiPlayMiniFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Layout from "../Layout";
import { GENRES, musics, recent_artists } from "../../data/data";
import user_image from "./../../assets/user-image/Eisa.png";
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
} from "./styles";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TiMediaPause } from "react-icons/ti";
import selectros from "../../redux/playing/selectors";
import { setIsPlaying, setMusic } from "../../redux/playing/productActions";

const Home = () => {
  SwiperCore.use(Autoplay);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSize, setIsSize] = useState(window.innerWidth < 700);
  const currentMusic = useSelector(selectros.getMusic);
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
          <span>
            <img src={user_image} alt="user-avatar" />
          </span>
        </StHomeHeader>
        <StHomeSwiperContainer>
          <Swiper
            centeredSlides
            slidesPerView={isSize ? 1.3 : 3}
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
            <span key={index}>{item}</span>
          ))}
        </StHomeGenres>
        <h5>Recent Artist</h5>
        <StHomeRecentArtists>
          {recent_artists.map(({ image }, index) => (
            <img src={image} alt="artist" key={index} />
          ))}
        </StHomeRecentArtists>
      </StHomeContainer>
    </Layout>
  );
};

export default Home;
