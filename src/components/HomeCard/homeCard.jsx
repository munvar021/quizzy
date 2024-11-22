import React from "react";
import { Card, CardTitle, StyledNavLink } from "./styledComponents";

const HomeCard = ({ title, items }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <nav>
        {items.map((item, index) => (
          <StyledNavLink key={`${item.name}-${index}`} to={item.path}>
            {item.name}
          </StyledNavLink>
        ))}
      </nav>
    </Card>
  );
};

export default HomeCard;
