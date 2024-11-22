import React from "react";
import { HomeContainer, HomeHeader, Grid } from "./styledComponents";
import HomeCard from "../../components/HomeCard/homeCard";
import { categoriesData } from "./data";

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>
        <h1>Welcome to Quizzy.Com!</h1>
        <p>
          Aptitude questions and answers for your placement interviews and
          competitive exams!
        </p>
      </HomeHeader>

      <Grid>
        {categoriesData.map((category, index) => (
          <HomeCard
            key={`${category.title}-${index}`}
            title={category.title}
            items={category.items}
          />
        ))}
      </Grid>
    </HomeContainer>
  );
};

export default Home;
