import styled from "styled-components";
import { breakpoints } from "../../../helpers/breakpoints";

export const StyledStepsContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  > * {
    padding-bottom: 1rem;
  }
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-column: 1 / 9;
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledStepsTitle = styled.h2`
  text-align: center;
`;

export const StyledStepGroup = styled.div`
  @media (min-width: ${breakpoints.DESKTOP}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    div:nth-child(n+2) {
      border-left: 1px solid var(--base-color);
    }
  }
`;

export const StyledStep = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: max-content;
  margin: 3rem 0;
  .icon-container {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    width: auto;
    height: 100%;
  }
  h3 {
    padding-left: 2rem;
    width: 70%;
  }
  @media (min-width: ${breakpoints.DESKTOP}) {
    flex-direction: column;
    flex-basis: 33%;
    height: auto;
    .icon-container {
      width: 20%;
    }
    h3 {
      width: 100%;
      height: 80%;
      text-align: center;
      font-size: 1.5rem;
      padding-left: 0;
    }
  }
`;
