import styled from "styled-components";

export const StyledStepsContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  > * {
    padding-bottom: 1rem;
  }
`;

export const StyledSteps = styled.div``;

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
`;
