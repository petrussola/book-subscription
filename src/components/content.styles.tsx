import styled from "styled-components";
import Books from "../images/books.jpg";

enum breakpoints {
  DESKTOP = "1000px",
  LARGE_MONITOR = "1500px",
}

export const CSSVariables = styled.div`
  --color: $;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, 1fr);
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 0.5fr repeat(7, 1fr);
    padding: 1rem 2rem;
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    grid-template-rows: 0.5fr 0.5fr repeat(9, 1fr);
  }
`;

export const StyledHeader = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border-bottom: 1px solid var(--separator-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-column: 1/9;
  }
`;

export const StyledBody = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 0;
  width: 100%;
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-column: 1 /9;
    grid-row: 2 / 8;
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
  border-bottom: 2px solid ${(props) => props.color};
`;

export const StyledBodyText = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 1rem;
  width: 100%;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: white;
    background-color: var(--main-color);
    width: 100%;
    text-align: center;
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
    height: 75%;
    padding-bottom: 0;
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
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
  height: 50%;
  border-radius: 5px;
  box-shadow: 2px 2px 0.5rem var(--separator-color);
  @media (min-width: ${breakpoints.DESKTOP}) {
    width: 50%;
    height: 75%;
  }
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

export const StyledFooter = styled.div`
  grid-column: 1 / 2;
  grid-row: 10 / 11;
  border-top: 1px solid var(--separator-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1rem;
  a {
    text-decoration: none;
    color: var(--main-color);
  }
  h3 {
    font-size: 1.25rem;
    padding-bottom: 0.2rem;
  }
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-column: 1 / 9;
    grid-row: 8 / 9;
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    grid-row: 10 / 11;
  }
`;
