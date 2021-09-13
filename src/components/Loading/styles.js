import styled, { keyframes } from "styled-components";

const rotate = keyframes`
to{transform : rotate(360deg)}
`;

export const StLoadingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  color: #fff;
  font-size: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-top-color: #909090;
    animation: ${rotate} 0.6s linear infinite;
  }
`;
export const StLoadingLayoutContainer = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
`;
