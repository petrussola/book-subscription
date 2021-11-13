import styled from "styled-components";
import { breakpoints } from "../helpers/breakpoints";

export const StyledWrapper = styled.section`
  width: 100%;
  height: max-content;
  color: var(--base-color);
  background-color: var(--background-color);
  @media (min-width: ${breakpoints.DESKTOP}) {
    height: 100vh;
  }
`;

export const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  @media (min-width: ${breakpoints.DESKTOP}) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 0.2fr 10fr 0.2fr;
    gap: 10px;
    padding: 1rem 2rem;
  }
`;