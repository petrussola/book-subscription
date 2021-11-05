import { Link } from "gatsby";
import * as React from "react";
import {
  StyledBody,
  StyledBodyImage,
  StyledBodyText,
  StyledFooter,
  StyledHeader,
} from "./content.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Award Books Subscription</h1>
    </StyledHeader>
  );
};

const BodyText = () => {
  return (
    <StyledBodyText>
      <h2><span>Not sure what to read next?</span></h2>
      <h3>
        We propose a selection of Award winning books: <span>Nobel</span>,{" "}
        <span>Booker</span>, <span>Dublin Literary Award</span>,{" "}
        <span>Goncourt</span>... chances are you will like them!
      </h3>
      <h3>
        You choose the prize and we send a winning book every month to your
        home.
      </h3>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdKrxaXCx9iQgaibvdTCfpqH2fV4WGymMjWFUW49m4lHALG2Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Coming soon to Ireland - Click here to be notified upon launch
      </a>
    </StyledBodyText>
  );
};

const BodyImage = () => {
  return <StyledBodyImage></StyledBodyImage>;
};

const Body = () => {
  return (
    <StyledBody>
      <BodyText />
      <BodyImage />
    </StyledBody>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/about/">
        <h3>About Us</h3>
      </Link>
      <h3>Contact: awardbooksubscription@gmail.com</h3>
      <h3>(c) 2021 - Award Book Subscription</h3>
    </StyledFooter>
  );
};

const Content = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default Content;
