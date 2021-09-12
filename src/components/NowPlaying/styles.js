import styled from "styled-components";

export const StNowPlayingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
`;

export const StNowPlayingHeader = styled.header`
  width: 100%;
  height: 10vh;
  padding: 0 20px;
  color: #fff;
  border-bottom: 2px solid #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & svg {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`;
export const StNowPlayingSigner = styled.article`
  width: 100%;
  height: 50vh;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  border-bottom: 2px solid #222;
  & img {
    width: 40%;
    height: 100%;
  }
  @media (max-width: 700px) {
    height: 80vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    & img {
      width: 80%;
      height: auto;
    }
  }
`;
export const StNowPlayingSignerInfo = styled.div`
  width: 60%;
  height: 50vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  & h5 {
    color: #a0a0a0;
  }
  & p {
    padding: 15px 0;
    font-size: 1rem;
    border-top: 2px solid #222;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
    justify-content: flex-start;
    font-size: 1rem;
  }
`;
export const StNowPlayingMusicContainer = styled.article`
  width: 100%;
  height: auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const StNowPlayingMusic = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.5rem;
  & span {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #95d854;
    color: #fff;
    cursor: pointer;
  }
  & svg {
    cursor: pointer;
  }
`;
export const StNowPlayingMusicProgressBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  & input {
    width: 65%;
    outline: none;
  }
`;
