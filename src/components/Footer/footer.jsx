import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterLinks,
  StyledNavLink,
} from "./styledComponents";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>© Quizzy™ Technologies</FooterLogo>
        <FooterLinks>
          <StyledNavLink to="/contact">Contact Us</StyledNavLink>
          <StyledNavLink to="/copyright">Copyright</StyledNavLink>
          <StyledNavLink to="/privacy">Privacy Policy</StyledNavLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
