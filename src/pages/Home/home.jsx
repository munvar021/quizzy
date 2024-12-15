import React from "react";
import { categoriesData, categoryColors } from "./data";
import {
  MainContainer,
  Header,
  HeaderTitle,
  HeaderDescription,
  CategoriesSection,
  CategoryHeading,
  CategoriesWrapper,
  CategoryButton,
  ContentGrid,
  CategorySection,
  SectionTitle,
  CardGrid,
  Card,
  CardContent,
  IconWrapper,
  CardInfo,
  CardTitle,
  CardSubtitle,
  ProgressCircle,
} from "./styledComponents";

const Home = () => {
  const uniqueCategories = [
    ...new Set(categoriesData.map((category) => category.title)),
  ];

  const getCategoryPath = (category) => {
    return `categories/${category.toLowerCase().replace(/[&\s]+/g, "-")}`;
  };

  return (
    <MainContainer>
      <Header>
        <HeaderTitle>Welcome to Quizzy.com!</HeaderTitle>
        <HeaderDescription>
          Aptitude questions and answers for your placement interviews and
          competitive exams!
        </HeaderDescription>
      </Header>

      <CategoriesSection>
        <CategoryHeading>Categories</CategoryHeading>
        <CategoriesWrapper>
          <CategoryButton to="/all" category="All">
            All
          </CategoryButton>
          {uniqueCategories.map((category) => (
            <CategoryButton
              key={category}
              to={getCategoryPath(category)}
              category={category}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoriesWrapper>
      </CategoriesSection>

      <ContentGrid>
        {categoriesData.map((category) => (
          <CategorySection key={category.title}>
            <SectionTitle>{category.title}</SectionTitle>
            <CardGrid>
              {category.items.map((item) => (
                <Card key={item.path} to={item.path}>
                  <CardContent>
                    <IconWrapper color={categoryColors[category.title]}>
                      <item.icon size={20} />
                    </IconWrapper>
                    <CardInfo>
                      <CardTitle>{item.name}</CardTitle>
                      <CardSubtitle>{item.topics}</CardSubtitle>
                    </CardInfo>
                  </CardContent>
                  <ProgressCircle color={categoryColors[category.title]}>
                    {item.progress}
                  </ProgressCircle>
                </Card>
              ))}
            </CardGrid>
          </CategorySection>
        ))}
      </ContentGrid>
    </MainContainer>
  );
};

export default Home;
