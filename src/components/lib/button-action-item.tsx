import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "../helpers/breakpoints";
import { buttonText, externalLinks } from "../helpers/button";

export enum MainButtonTypes {
  WAIT_LIST = "waitList",
  SIGNUP = "signup",
}

const buttonOptions = {
  waitList: {
    text: buttonText.WAITING_LIST,
    link: externalLinks.GOOGLE_FORM,
  },
  signUp: {
    text: "blabla",
    link: "blabla",
  },
};

const StyledButtonActionItem = styled.a<{ width?: number }>`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-radius: 2rem;
  outline: none;
  background-color: #000000;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  text-align: center;
  @media (min-width: ${breakpoints.DESKTOP}) {
    :hover {
      background-color: #222222;
    }
    width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    font-size: 1.75rem;
  }
`;

interface MainButtonProps {
  type: MainButtonTypes;
  external?: boolean;
  width?: number;
}

const MainButton = ({ type, external, width }: MainButtonProps) => {
  const externalLinkProps = external && {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  return (
    <StyledButtonActionItem
      href={buttonOptions[type].link}
      width={width}
      {...externalLinkProps}
    >
      {buttonOptions[type].text}
    </StyledButtonActionItem>
  );
};

export default MainButton;
