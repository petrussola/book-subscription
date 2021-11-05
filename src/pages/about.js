import * as React from "react";
import { GlobalStyle } from "../styles/reset";
import { Header } from "../components/content";
import { GridWrapper } from "./index";
import { StyledWrapper } from "../pages";

const AboutPage = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <GridWrapper>
          <Header />
        </GridWrapper>
      </StyledWrapper>
    </>
  );
};

export default AboutPage;
