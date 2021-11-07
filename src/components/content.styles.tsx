import styled from "styled-components";
import Books from "../images/books.jpg";

export enum breakpoints {
  DESKTOP = "1000px",
  LARGE_MONITOR = "1500px",
}

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

export const StyledHeader = styled.div`
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
    color: var(--main-color)
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
      background-color: rgb(236,48,59, 0.1);
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
  background: url(${Books});
  background-size: cover;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  box-shadow: 2px 2px 0.5rem var(--separator-color);
  @media (min-width: ${breakpoints.DESKTOP}) {
    width: 50%;
    min-height: 300px;
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    min-height: 600px;
  }
`;

export const StyledFooter = styled.div`
  border-top: 1px solid var(--separator-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem 0;
  height: max-content;
  a {
    text-decoration: none;
    color: var(--base-color);
  }
  h3 {
    font-size: 1rem;
    padding-bottom: 0.2rem;
  }
  h4 {
    font-size: 0.75rem;
  }
  #contact-email {
    color: var(--main-color);
    font-size: 0.75rem;
  }
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-column: 1 / 9;
    grid-row: 3 / 4;
    padding-bottom: 0;
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    grid-row: 10 / 11;
  }
`;

export const StyledFooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: ${breakpoints.DESKTOP}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const StyledFooterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledCopyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  width: 100%;
  h5 {
    font-size: 0.75rem;
  }
`;
