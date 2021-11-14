import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    border: 0;
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;    
}
body{
    font-family: "Changa", sans-serif;
    background-color: #60c968;
    line-height: 1.5;
}
a {
    text-decoration: none;
    color: inherit;
}

button{
    background-color: inherit;
}
li {
    list-style: none;
}
`;

export const StLayoutContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #000;
  overflow: hidden;
`;
