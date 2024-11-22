import React, { useState, useRef, useEffect } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShareAlt,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  Header as HeaderContainer,
  MenuButton,
  Logo,
  SearchOverlay,
  SearchContainer,
  SearchInput,
  IconContainer,
  IconButton,
} from "./styledComponents";

const Header = ({ toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <HeaderContainer>
      <MenuButton onClick={toggleSidebar}>
        <AiOutlineMenu />
      </MenuButton>

      <Logo to="/">Quizzy</Logo>

      <SearchOverlay isSearchOpen={isSearchOpen} />
      <SearchContainer isSearchOpen={isSearchOpen} ref={searchRef}>
        <SearchInput placeholder="Search..." />
      </SearchContainer>

      <IconContainer isSearchOpen={isSearchOpen}>
        <IconButton onClick={toggleSearch}>
          <AiOutlineSearch />
        </IconButton>
        <IconButton>
          <AiOutlineShareAlt />
        </IconButton>
        <IconButton as={RouterNavLink} to="/logout">
          <AiOutlineLogout />
        </IconButton>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
