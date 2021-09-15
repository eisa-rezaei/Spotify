import styled from "styled-components";

export const StSingleGener = styled.div`
  min-width: 100px;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid #fff;
  transition: all 0.15s linear;
  cursor: pointer;
  ${(props) =>
    props.isClicked
      ? `background-color: #fff; color: #222;`
      : `background-color: #222; color: #fff;`}

  @media (max-width: 700px) {
    min-width: 70px;
    margin: 5px;
    font-size: 0.8rem;
  }
`;
