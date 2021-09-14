import styled from "styled-components";

export const StHomeContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  color: #fff;
  & h5 {
    margin: 15px;
  }
  @media (max-width: 700px) {
    & h5 {
      font-size: 1.2rem;
      margin: 10px;
    }
  }
`;
export const StHomeHeader = styled.header`
  width: 100%;
  height: 10vh;
  padding: 0 20px;
  color: #fff;
  border-bottom: 2px solid #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & span {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background-color: navajowhite;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
export const StHomeSearch = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  & svg {
    margin: 0 15px;
  }
`;
export const StHomeSearchInput = styled.input`
  width: 80%;
  height: auto;
  background-color: inherit;
  color: #fff;
  outline: none;
`;

export const StHomeSwiperContainer = styled.section`
  width: 100%;
  height: 45vh;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .swiper-container {
    height: inherit;
  }
  @media (max-width: 700px) {
    height: 40vh;
  }
`;
export const StHomeSwiperSlide = styled.article`
  width: inherit;
  height: inherit;
  position: relative;
  border-radius: 10px;
  background-color: #e0e0e0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StHomeSwiperSlideTag = styled.button`
  top: 20px;
  left: 20px;
  padding: 5px;
  height: auto;
  color: #fff;
  position: absolute;
  border-radius: 5px;
  background-color: #00000050;
`;

export const StHomePlaySound = styled.div`
  width: 100%;
  height: 90px;
  z-index: 2;
  bottom: 0px;
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgb(85, 85, 85);
  background: linear-gradient(
    0deg,
    rgba(85, 85, 85, 1) 19%,
    rgba(148, 118, 182, 0) 98%
  );
  ${(props) =>
    props.isActive
      ? `transform: translateY(0%);`
      : `transform: translateY(150%);`}

  & span {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #95d854;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    padding: 0 10px;
    & span {
      width: 100px;
    }
  }
`;
export const StHomePlaySoundInfo = styled.div`
  width: 200px;
  margin-left: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  & p {
    font-size: 0.8rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    align-items: flex-start;
    margin-left: 20px;
    font-size: 0.8rem;
  }
`;

export const StHomeGenres = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  color: #fff;
  font-size: 1rem;
  & span {
    min-width: 100px;
    padding: 10px;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #fff;
    transition: all 0.15s linear;
    :hover {
      background-color: #ffffff30;
      cursor: pointer;
    }
  }
`;

export const StHomeRecentArtists = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  justify-items: center;
  align-content: center;
  & img {
    width: 32%;
    height: 400px;
    object-fit: cover;
    margin: 5px;
    border-radius: 10px;
  }

  @media (max-width: 700px) {
    & img {
      width: 44%;
      height: 200px;
      object-fit: cover;
    }
  }
`;
