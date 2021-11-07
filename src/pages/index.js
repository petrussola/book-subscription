import * as React from "react";
import { GlobalStyle } from "../styles/reset";
import styled from "styled-components";
import HomePage from "../components/content";
import "@fontsource/archivo";
import "@fontsource/archivo-black"
import { StyledGrid, breakpoints } from "../components/content.styles";

export const StyledWrapper = styled.section`
  width: 100%;
  height: max-content;
  color: var(--base-color);
  @media (min-width: ${breakpoints.DESKTOP}) {
    height: 100vh;
  }
`;

export const GridWrapper = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

const IndexPage = ({ location }) => {
  const page = location.pathname.split("/")[1];
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <GridWrapper>
          <HomePage page={page} />
        </GridWrapper>
      </StyledWrapper>
    </>
  );
};

export default IndexPage;
