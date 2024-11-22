import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 8px;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const CardTitle = styled.h2`
  color: #5eac1a;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
    padding-bottom: 10px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  color: #444;
  text-decoration: none;
  padding: 8px 0;
  font-size: 15px;
  position: relative;
  padding-left: 16px;
  transition: all 0.3s ease;
  margin-bottom: 4px;

  &::before {
    content: ">";
    position: absolute;
    left: 0;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #5eac1a;
    padding-left: 20px;
    text-decoration: underline;

    &::before {
      opacity: 1;
      left: 6px;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 0;
  }
`;
