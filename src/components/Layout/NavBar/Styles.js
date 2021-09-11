import styled from "styled-components";

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
