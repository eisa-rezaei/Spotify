import styled, {keyframes} from "styled-components";

const rotate = keyframes`
   0% {
    transform: rotate(0deg);
    border-top: 3px solid #60c968;
  }
   100% {
    transform: rotate(360deg);
    border-top: 3px solid #60c968;
  }
`;
export const StLoadingLayoutContainer = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  font-family: "Changa", sans-serif;
  & span {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-top: 3px solid #60c968;
    animation: ${rotate} 1.5s ease infinite;
  }
`;
