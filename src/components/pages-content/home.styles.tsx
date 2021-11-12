import styled from "styled-components";
// import Books from "../../images/bookstwo.jpg";
import { breakpoints } from "../helpers/breakpoints";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 0;
  width: 100%;
  height: max-content;
  padding: 1rem 0;
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
    > div {
      height: 50%;
    }
  }
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  border-bottom: 2px solid var(--main-color);
`;

export const StyledBodyText = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 0;
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    width: 100%;
    font-family: "Archivo Black";
    line-height: 1;
    color: var(--main-color);
  }
  h3 {
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }
  a {
    width: 100%;
    padding: 1rem 0.5rem;
    border-radius: 5px;
    border: 3px solid var(--main-color);
    outline: none;
    background-color: white;
    font-size: 1.25rem;
    color: var(--main-color);
    text-decoration: none;
    text-align: center;
    font-weight: bold;
  }
  @media (min-width: ${breakpoints.DESKTOP}) {
    width: 50%;
    min-height: 300px;
    padding-bottom: 0;
    justify-content: space-around;
    a:hover {
      background-color: rgb(236, 48, 59, 0.1);
    }
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    min-height: 600px;
    h2 {
      font-size: 3.5rem;
    }
    h3 {
      font-size: 2rem;
    }
    a {
      font-size: 1.75rem;
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
    min-height: 600px;
    margin: 0 4rem;
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    min-height: 600px;
  }
`;
