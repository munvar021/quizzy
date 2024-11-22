import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  transition: all 0.3s ease;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 24px;
  padding: 8px;
  display: flex;
  align-items: center;

  &:hover {
    background: #f5f5f5;
    border-radius: 4px;
  }

  svg {
    font-size: 24px;
  }
`;

export const Logo = styled(RouterNavLink)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin-right: auto;
`;

export const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: ${({ isSearchOpen }) => (isSearchOpen ? "block" : "none")};
  z-index: 999;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: ${({ isSearchOpen }) => (isSearchOpen ? "flex" : "none")};
    z-index: 1000;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #5eac1a;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isSearchOpen }) => (isSearchOpen ? "none" : "flex")};
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;

  &:hover {
    background: #f5f5f5;
    border-radius: 4px;
  }

  svg {
    font-size: 20px;
  }
`;
