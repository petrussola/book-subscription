import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "../helpers/breakpoints";

const StyledHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--separator-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  padding: 1rem 0;
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-column: 1/9;
    grid-row: 1 / 2;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Awards Book Subscription</h1>
    </StyledHeader>
  );
};
