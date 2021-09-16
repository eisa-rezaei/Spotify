import styled, { keyframes } from "styled-components";

const rotate = keyframes`
to{transform: rotate(360deg);}
`;

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
  margin-left: 25%;
  & h5 {
    margin: 15px;
  }
  @media (max-width: 700px) {
    margin-left: 20%;
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
  position: relative;
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
export const StUserInfoCard = styled.div`
  width: 220px;
  height: 150px;
  top: 80px;
  right: 0;
  z-index: 2;
  padding: 10px;
  position: absolute;
  background-color: #000;
  transition: all 0.4s linear;
  transform: ${(props) =>
    props.isUserInfoCardOpen ? `scale3d(1 , 1 ,1);` : `scale3d(0.8 , 0 ,0.3);`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.8rem;
  & svg {
    color: orange;
  }
  & span {
    width: 50px;
    height: 50px;
    border: 2px solid gray;
    background-color: #000;
    border-top-color: #a0a0a0;
    align-self: center;
    animation: ${rotate} 0.5s linear infinite;
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
    min-width: 60px;
    min-height: 60px;
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
      width: 80px;
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
  margin: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  color: #fff;
  font-size: 1rem;
  @media (max-width: 700px) {
    justify-content: flex-start;
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
  & a {
    width: 32%;
    height: 400px;
    padding: 5px;
    border-radius: 10px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 700px) {
    & a {
      width: 44%;
      height: 200px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
