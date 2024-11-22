import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: auto;
  background-color: #ffffff;
  padding: 1rem 2rem;
  position: relative;
  border-top: 1px solid #eaeaea;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

export const FooterLogo = styled.div`
  color: #333;
  font-size: 0.9rem;
`;

export const FooterLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #0099ff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0077cc;
    text-decoration: underline;
  }

  &.active {
    color: #0077cc;
  }
`;
