import styled from "styled-components";
import Books from "../images/books.jpg";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, 1fr);
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

export const StyledHeader = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border-bottom: 2px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
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
`;

export const StyledBodyText = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-bottom: 1rem;
  width: 100%;
  span {
    font-weight: bold;
    color: ${(props) => props.color};
  }
  h2 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
  h3 {
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }
  a {
    width: 100%;
    padding: 1rem 0.5rem;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #035b96;
    font-size: 1.25rem;
    color: white;
    text-decoration: none;
    text-align: center;
  }
`;

export const StyledBodyImage = styled.div`
  background: url(${Books});
  background-size: cover;
  width: 100%;
  height: 50%;
  border-radius: 5px;
`;

export const StyledFooter = styled.div`
  grid-row: 10 / 11;
  border-top: 2px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  a {
    text-decoration: none;
    color: #035b96;
  }
  h3 {
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }
`;
