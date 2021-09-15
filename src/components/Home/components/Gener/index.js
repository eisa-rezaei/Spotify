import React, { useState } from "react";
import { StSingleGener } from "./styles";

const Gener = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <StSingleGener
      isClicked={isClicked}
      onClick={() => setIsClicked(!isClicked)}
    >
      {item}
    </StSingleGener>
  );
};

export default Gener;
