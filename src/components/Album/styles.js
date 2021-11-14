import styled from "styled-components";

export const StAlbumContainer = styled.main`
  width: 100%;
  height: 100vh;
  margin-left: 25%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
  @media (max-width: 700px) {
    margin-left: 20%;
  }
`;

export const StAlbumHeader = styled.header`
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
  & span {
    padding: 5px;
    border-radius: 5px;
    background-color: #7670f6;
  }
  @media (max-width: 700px) {
    padding: 0 10px;
    font-size: 1.2rem;
  }
`;
export const StAlbumArtist = styled.article`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid #333;
  & img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    background-color: #e0e0e0;
  }
  @media (max-width: 700px) {
    padding: 5px 10px;
    & img {
      width: 100px;
      height: 100px;
    }
  }
`;
export const StAlbumArtistInfo = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 700px) {
    padding: 10px;
    font-size: 1rem;
  }
`;
export const StAlbumArtistInfoFollowPart = styled.div`
  width: 50vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  & span {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    & p {
      font-size: 1rem;
    }
  }
  @media (max-width: 700px) {
    width: 40vw;
    & span {
      font-size: 1rem;
      & p {
        font-size: 0.7rem;
      }
    }
  }
`;

export const StAlbumArtistMusicsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
