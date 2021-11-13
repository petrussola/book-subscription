import * as React from "react";
import { ButtonActionItem } from "../lib/button-action-item";
import {
  StyledBody,
  StyledBodyImage,
  StyledBodyText,
  StyledSpan,
} from "./home.styles";
import { buttonText, externalLinks } from "../helpers/button";
import BookStore from '../../images/bookstwo.jpg'

const BodyText = () => {
  const waitingListProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  return (
    <StyledBodyText>
      <h2>Not sure what to read next?</h2>
      <h3>
        We propose a fine selection of Award winning books:{" "}
        <StyledSpan>Nobel</StyledSpan>, <StyledSpan>Booker</StyledSpan>,{" "}
        <StyledSpan>Dublin Literary Award</StyledSpan>,{" "}
        <StyledSpan>Goncourt</StyledSpan>... chances are you will like them!
      </h3>
      <h3>
        You choose the prize and you get a book delivered to your home every month.
      </h3>
      <ButtonActionItem link={externalLinks.GOOGLE_FORM} {...waitingListProps}>
        {buttonText.WAITING_LIST}
      </ButtonActionItem>
    </StyledBodyText>
  );
};

const BodyImage = () => {
  return (
    <StyledBodyImage>
      <img src={BookStore} alt="book store" />
    </StyledBodyImage>
  )
}

const HomeBody = () => {
  return (
    <StyledBody>
      <BodyText />
      <BodyImage />
    </StyledBody>
  );
};

export default HomeBody;
