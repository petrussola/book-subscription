import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "./helpers/breakpoints";
import LocationContext from "../context/location";

const StyledFooter = styled.div`
  border-top: 1px solid var(--separator-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem 0;
  height: max-content;
  a {
    text-decoration: none;
    color: var(--base-color);
  }
  h3 {
    font-size: 1rem;
    padding-bottom: 0.2rem;
  }
  h4 {
    font-size: 0.75rem;
  }
  #contact-email {
    color: var(--main-color);
    font-size: 0.75rem;
  }
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-column: 1 / 9;
    grid-row: 3 / 4;
    padding-bottom: 0;
  }
  @media (min-width: ${breakpoints.LARGE_MONITOR}) {
    grid-row: 10 / 11;
  }
`;

const StyledFooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: ${breakpoints.DESKTOP}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const StyledFooterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const StyledCopyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  width: 100%;
  h5 {
    font-size: 0.75rem;
  }
`;

const FooterContent = () => {
  return (
    <StyledFooterContent>
      <FooterNavigation />
      <FooterContact />
    </StyledFooterContent>
  );
};

const FooterNavigation = () => {
  const page = React.useContext(LocationContext);
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
      <a href={`mailto:${process.env.GATSBY_CONTACT_EMAIL}`} id="contact-email">
        {process.env.GATSBY_CONTACT_EMAIL}
      </a>
      <h4>{process.env.GATSBY_CONTACT_ADDRESS}</h4>
    </StyledFooterContact>
  );
};

const Copyright = () => {
  return (
    <StyledCopyright>
      <h5>(c) 2021 - Award Book Subscription | Made with 💙 by peresola.com</h5>
    </StyledCopyright>
  );
};

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent />
      <Copyright />
    </StyledFooter>
  );
};
