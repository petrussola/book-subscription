import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../helpers/breakpoints";
import LocationContext from "../../context/location";

const StyledFooter = styled.div`
  border-top: 1px solid var(--separator-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem 0;
  height: max-content;
  font-size: 1rem;
  a {
    text-decoration: none;
    color: var(--base-color);
    font-size: 1rem;
  }
  @media (min-width: ${breakpoints.DESKTOP}) {
    grid-column: 1 / 9;
    grid-row: 4 / 5;
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
  h4:first-child {
    padding-bottom: 0.3rem;
  }
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
  text-align: center;
  @media (min-width: ${breakpoints.DESKTOP}) {
    font-size: 75%;
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
      {page ? <h4>Home</h4> : <h4>About Us</h4>}
    </Link>
  );
};

const FooterContact = () => {
  return (
    <StyledFooterContact>
      <h4>Contact</h4>
      <a href={`mailto:${process.env.GATSBY_CONTACT_EMAIL}`} id="contact-email">
        {process.env.GATSBY_CONTACT_EMAIL}
      </a>
      <h5>{process.env.GATSBY_CONTACT_ADDRESS}</h5>
    </StyledFooterContact>
  );
};

const Copyright = () => {
  return (
    <StyledCopyright>
      <h6>(c) 2021 - Award Book Subscription | Made with 💙 by peresola.com</h6>
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
