import * as React from "react";
import MainButton, { MainButtonTypes } from "../../lib/button-action-item";
import {
  StyledBody,
  StyledBodyImage,
  StyledBodyText,
  StyledSpan,
} from "./home.styles";
import { buttonText, externalLinks } from "../../helpers/button";
import BookStore from "../../../images/bookstwo.jpg";
import Steps from "./steps/steps";

const BodyText = () => {
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
        You choose the prize and you get a book delivered to your home every
        month.
      </h3>
      <MainButton type={MainButtonTypes.WAIT_LIST} external />
    </StyledBodyText>
  );
};

const BodyImage = () => {
  return (
    <StyledBodyImage>
      <img src={BookStore} alt="book store" />
    </StyledBodyImage>
  );
};

const HomeBody = () => {
  return (
    <StyledBody>
      <BodyText />
      <BodyImage />
      <Steps />
      <MainButton type={MainButtonTypes.WAIT_LIST} external />
    </StyledBody>
  );
};

export default HomeBody;
