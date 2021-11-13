import * as React from "react";
import { GlobalStyle } from "../../styles/reset";
import "@fontsource/roboto";
import { Header } from "../fixtures/header";
import { Footer } from "../fixtures/footer";
import { StyledGrid, StyledWrapper } from "./page-wrapper.styles";
import LocationContext from "../../context/location";

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
