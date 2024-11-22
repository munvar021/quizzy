import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Sidebar = styled.nav`
  width: 250px;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 60px;
  left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  overflow-y: auto;
  transition: left 0.3s ease;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  z-index: 999;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const NavLink = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;

  &:hover {
    background-color: #f5f5f5;
    border-left-color: #5eac1a;
    text-decoration: underline;
  }

  &.active {
    background-color: #f5f5f5;
    border-left-color: #5eac1a;
    font-weight: 500;
  }

  svg {
    margin-right: 12px;
    font-size: 20px;
  }
`;

export const CategoryDivider = styled.div`
  padding: 16px 20px 8px;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  border-top: 1px solid #eee;
`;
