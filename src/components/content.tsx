import { Link } from "gatsby";
import * as React from "react";
import {
  StyledBody,
  StyledBodyImage,
  StyledBodyText,
  StyledCopyright,
  StyledFooter,
  StyledHeader,
  StyledSpan,
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
      <h2>
        Not sure what to read next?
      </h2>
      <h3>
        We propose a fine selection of Award winning books:{" "}
        <StyledSpan color="pink">Nobel</StyledSpan>, <StyledSpan color="yellow">Booker</StyledSpan>,{" "}
        <StyledSpan color="LightSalmon">Dublin Literary Award</StyledSpan>,{" "}
        <StyledSpan color="Olive">Goncourt</StyledSpan>... chances are you will like them!
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

const Copyright = () => {
  return (
    <StyledCopyright>
      <h5>(c) 2021 - Award Book Subscription | Made with 💙 by peresola.com</h5>
    </StyledCopyright>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/about/">
        <h3>About Us</h3>
      </Link>
      <h3>Contact: awardbooksubscription@gmail.com</h3>
      <Copyright />
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
