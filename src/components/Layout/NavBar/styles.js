import styled, { keyframes } from "styled-components";

const heightChanger = keyframes`
0% { height : 10px; }
25%{  height : 20px ;}
50%{ height : 40px ;}
75%{ height : 20px ;}
100% {height : 10px}
`;

export const StNavBarContainer = styled.div`
  width: 30%;
  height: 100vh;
  padding-bottom: 15px;
  color: #fff;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid #333;
  z-index: 2;
  top: 0;
  bottom: 0;
  position: sticky;
  @media (max-width: 700px) {
    width: 70px;
  }
`;
export const StNavBarLinks = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 700px) {
    & a {
      display: flex;
      align-items: center;
      justify-content: center;
      & img {
        width: 50px;
        height: 50px;
        margin: 20px 0;
      }
    }
  }
`;
export const StNavBarSingleLink = styled.li`
  width: 100%;
  padding: 25px 0;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isSameLink ? `#fff` : `#808080`)};
  :hover {
    background-color: #222;
    color: #fff;
  }
  & svg {
    margin: 0 20px;
  }
  @media (max-width: 700px) {
    padding: 20px 0;
    & svg {
      width: 30px;
      height: 30px;
    }
  }
`;
export const StNavBarSoundOptions = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  & span {
    min-width: 60px;
    height: 5px;
    background-color: #fff;
    border-radius: 2px;
  }
  @media (max-width: 700px) {
    min-height: 250px;
    flex-direction: column-reverse;
    justify-content: space-between;
    & span {
      transform: rotate(90deg);
    }
  }
`;
export const StNavBarMusicSignerImage = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const StNavBarMusicSignerImagePlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #60c96880;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    width: 3.1%;
    background-color: #fff;
    margin: 2px;
  }
  & p:nth-child(1) {
    animation: ${heightChanger} 1.5s linear infinite 0.2s;
  }
  & p:nth-child(2) {
    animation: ${heightChanger} 1.5s linear infinite 0.4s;
  }
  & p:nth-child(3) {
    animation: ${heightChanger} 1.5s linear infinite 0.6s;
  }
  & p:nth-child(4) {
    animation: ${heightChanger} 1.5s linear infinite 0.8s;
  }
  & p:nth-child(5) {
    animation: ${heightChanger} 1.5s linear infinite 1s;
  }
  & p:nth-child(6) {
    animation: ${heightChanger} 1.5s linear infinite 1.2s;
  }
  & p:nth-child(7) {
    animation: ${heightChanger} 1.5s linear infinite 1.4s;
  }
`;