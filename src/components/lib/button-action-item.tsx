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

interface ButtonActionItemProps {
  children: string;
  type: MainButtonTypes;
  external?: boolean;
}

const StyledButtonActionItem = styled.a`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 2rem;
  outline: none;
  background-color: #000000;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  @media (min-width: ${breakpoints.DESKTOP}) {
    a:hover {
      background-color: #222222;
    }
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    font-size: 1.75rem;
  }
`;

interface MainButtonProps {
  type: MainButtonTypes;
  external?: boolean;
}

const MainButton = ({ type, external }: MainButtonProps) => {
  const externalLinkProps = external ?? {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  return (
    <StyledButtonActionItem
      href={buttonOptions[type].link}
      {...externalLinkProps}
    >
      {buttonOptions[type].text}
    </StyledButtonActionItem>
  );
};

export default MainButton;
