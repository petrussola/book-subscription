import * as React from "react";
import { GlobalStyle } from "../styles/reset";
import "@fontsource/archivo";
import "@fontsource/archivo-black";
import { Header } from "./header";
import { Footer } from "./footer";
import { StyledGrid, StyledWrapper } from "./page-wrapper.styles";
import LocationContext from "../context/location";

const PageWrapper = ({ children, page }) => {
  return (
    <>
      <GlobalStyle />
      <LocationContext.Provider value={page}>
        <StyledWrapper>
          <StyledGrid>
            <Header />
            {children}
            <Footer />
          </StyledGrid>
        </StyledWrapper>
      </LocationContext.Provider>
    </>
  );
};

export default PageWrapper;
