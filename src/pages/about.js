import * as React from "react";
import { GlobalStyle } from "../styles/reset";
import { Header, Footer, BodyButton } from "../components/content";
import { GridWrapper } from "./index";
import { StyledWrapper } from "../pages";
import {
  StyledBody,
  StyledBodyImage,
  StyledBodyText,
  StyledSpan,
} from "../components/content.styles.tsx";

const AboutBody = () => {
  return (
    <StyledBody>
      <AboutImage />
      <AboutText />
    </StyledBody>
  );
};

const AboutText = () => {
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
      <BodyButton />
    </StyledBodyText>
  );
};

const AboutImage = () => {
  return <StyledBodyImage />;
};

const AboutPage = ({ location }) => {
  const page = location.pathname.split("/")[1];
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <GridWrapper>
          <Header />
          <AboutBody />
          <Footer page={page} />
        </GridWrapper>
      </StyledWrapper>
    </>
  );
};

export default AboutPage;
