import styled, {keyframes} from "styled-components";

const heightChanger = keyframes`
0% { height : 10px; }
25%{  height : 20px ;}
50%{ height : 30px}
75%{ height : 20px ;}
100% {height : 10px}
`;

export const StAlbumArtistMusic = styled.section`
  width: 100%;
  height: 100px;
  padding: 0 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #333;
  transition: all 0.2s linear;
  :hover {
    background-color: #202020;
    cursor: pointer;
  }
  & span {
    display: flex;
    align-items: center;
    justify-content: space-around;
    & h3 {
      margin: 20px;
    }
  }
  @media (max-width: 700px) {
    padding: 0 5px;
    font-size: 0.6rem;
    & span {
      & h3 {
        margin: 10px;
      }
    }
  }
`;
export const StAlbumArtistMusicCurrentProgress = styled.div`
  width: ${(props) => props?.currentTime}%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.2;
  z-index: 2;
  position: absolute;
  transition: all 1s linear;
  border-radius: 00px 5px 5px 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    -90deg,
    rgba(255, 255, 255, 1) 30%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const StAlbumArtistMusicEdit = styled.div`
  width: ${(props) => (props.isMusicEditOpen ? `15vw;` : `0px;`)};
  height: 50%;
  right: 30px;
  overflow: hidden;
  position: absolute;
  transition: all 0.2s linear;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  input {
    width: 70%;
  }
`;

export const StAlbumMusicPlay = styled.div`
  width: 25px;
  height: 100%;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    width: 33%;
    background-color: #fff;
    margin: 2px;
    border-radius: 10px;
  }
  & p:nth-child(1) {
    animation: ${heightChanger} 1.5s linear infinite 0.4s;
  }
  & p:nth-child(2) {
    animation: ${heightChanger} 1.5s linear infinite 0.1s;
  }
  & p:nth-child(3) {
    animation: ${heightChanger} 1.5s linear infinite 0.4s;
  }
  @media (max-width: 700px) {
    width: 15px;
    margin: 10px;
  }
`;
