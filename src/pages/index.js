import * as React from "react";
import { GlobalStyle } from "../styles/reset";
import styled from "styled-components";
import Content from "../components/content";
import "@fontsource/archivo";
import { StyledGrid } from "../components/content.styles";

export const StyledWrapper = styled.section`
  width: 100%;
  height: 1200px;
  @media (min-width: 1000px) {
    height: 100vh;
  }
`;

export const GridWrapper = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <GridWrapper>
          <Content />
        </GridWrapper>
      </StyledWrapper>
    </>
  );
};

export default IndexPage;
