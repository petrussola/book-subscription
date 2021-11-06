import * as React from "react";
import { GlobalStyle } from "../styles/reset";
import { Header, Footer } from "../components/content";
import { GridWrapper } from "./index";
import { StyledWrapper } from "../pages";

const AboutPage = ({ location }) => {
  debugger
  const page = location.pathname.split("/")[1];
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <GridWrapper>
          <Header />
          <Footer page={page} />
        </GridWrapper>
      </StyledWrapper>
    </>
  );
};

export default AboutPage;
