import * as React from "react";
import LocationContext from "../../context/location";
import { buttonText, externalLinks } from "../helpers/button";
import { ButtonActionItem } from "../lib/button-action-item";
import {
  StyledBody,
  StyledBodyImage,
  StyledBodyText,
  StyledSpan,
} from "./home.styles";
import BookStore from '../../images/bookstwo.jpg'
import Books from '../../images/books.jpg'

const AboutText = () => {
  const waitingListProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  return (
    <StyledBodyText>
      <h3>
        My name is <StyledSpan>Pere</StyledSpan>, I live in{" "}
        <StyledSpan>Dublin</StyledSpan> and I love to read. I don't have a
        particular favorite style, I like to read all sorts of books. I often
        feel overwhelmed by the enourmous selection of books in bookstores and
        libraries, and I don't like to judge a book by its cover (I have had bad
        experiences..). That is why I often turn to the list of winners of
        specific prizes to select my next read and it has worked very well for
        me.
      </h3>
      <h3>
        Setting up this book subscription is a way to bring quality literature
        to others. <StyledSpan>Hope you like my selection!</StyledSpan>
      </h3>
      <ButtonActionItem link={externalLinks.GOOGLE_FORM} {...waitingListProps}>
        {buttonText.WAITING_LIST}
      </ButtonActionItem>
    </StyledBodyText>
  );
};

const BodyImage = () => {
  const page = React.useContext(LocationContext)
  return (
    <StyledBodyImage>
      <img src={page === "about" ? Books : BookStore} alt="book store" />
    </StyledBodyImage>
  )
}

const AboutBody = () => {
  return (
    <StyledBody>
      <BodyImage />
      <AboutText />
    </StyledBody>
  );
};

export default AboutBody;
