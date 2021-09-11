import React from "react";
import { GlobalStyles, StLayoutContainer } from "./GlobalStyles";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <StLayoutContainer>
      <NavBar /> {children}
      <GlobalStyles />
    </StLayoutContainer>
  );
};

export default Layout;
