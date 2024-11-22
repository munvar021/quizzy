import React from "react";
import { useLocation } from "react-router-dom";
import { navigationItems } from "./data";
import {
  Sidebar as SidebarContainer,
  NavList,
  NavItem,
  NavLink,
  CategoryDivider,
} from "./styledComponents";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  return (
    <SidebarContainer isOpen={isOpen}>
      <NavList>
        {navigationItems.map((section, index) => (
          <React.Fragment key={index}>
            {section.category && (
              <CategoryDivider>{section.category}</CategoryDivider>
            )}
            {section.items.map((item) => (
              <NavItem key={item.id}>
                <NavLink
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  <item.icon />
                  {item.title}
                </NavLink>
              </NavItem>
            ))}
          </React.Fragment>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
