import styled from "styled-components";
import { breakpoints } from "../../helpers/breakpoints";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 0;
  width: 100%;
  padding: 1rem 0 2rem 0;
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-column: 1 /9;
    grid-row: 2 / 3;
    place-self: center;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    > div {
      margin: 0 1rem;
    }
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    grid-row: 2 / 10;
  }
`;

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const StyledBodyText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 0 2rem 0;
  > * {
    padding-bottom: 2rem;
  }
  h2 {
    color: var(--base-color);
  }
  @media (min-width: ${breakpoints.DESKTOP}) {
    width: 50%;
    min-height: 300px;
    padding-bottom: 0;
    justify-content: space-around;
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    min-height: 600px;
    h2 {
      font-size: 3.5rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;

export const StyledBodyImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    box-shadow: 2px 2px 0.5rem var(--separator-color);
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  @media (min-width: ${breakpoints.DESKTOP}) {
    width: 50%;
    height: 500px;
    img {
      height: 90%;
      width: auto;
    }
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    width: 50%;
    height: 900px;
    img {
      height: 90%;
      width: auto;
    }
  }
`;
