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
  StyledFooterContent,
  StyledFooterContact,
} from "./content.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Awards Book Subscription</h1>
    </StyledHeader>
  );
};

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
        You choose the prize you want to follow and we send a book every month
        to your home.
      </h3>
      <BodyButton />
    </StyledBodyText>
  );
};

const BodyImage = () => {
  return <StyledBodyImage></StyledBodyImage>;
};

export const BodyButton = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdKrxaXCx9iQgaibvdTCfpqH2fV4WGymMjWFUW49m4lHALG2Q/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
      Coming soon to Ireland - Click here to be notified upon launch
    </a>
  );
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

export const Footer = ({ page }) => {
  return (
    <StyledFooter>
      <FooterContent page={page} />
      <Copyright />
    </StyledFooter>
  );
};

const FooterContent = ({ page }) => {
  return (
    <StyledFooterContent>
      <FooterNavigation page={page} />
      <FooterContact />
    </StyledFooterContent>
  );
};

const FooterNavigation = ({ page }) => {
  return (
    <Link to={page ? "/" : "/about"}>
      {page ? <h3>Home</h3> : <h3>About Us</h3>}
    </Link>
  );
};

const FooterContact = () => {
  return (
    <StyledFooterContact>
      <h3>Contact:</h3>
      <h2>{process.env.GATSBY_CONTACT_EMAIL}</h2>
      <h2>{process.env.GATSBY_CONTACT_ADDRESS}</h2>
    </StyledFooterContact>
  );
};

const HomePage = ({ page }) => {
  return (
    <>
      <Header />
      <Body />
      <Footer page={page} />
    </>
  );
};

export default HomePage;
