import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HomeHeader = styled.header`
  margin-bottom: 30px;

  h1 {
    color: #333;
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 12px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    color: #666;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1601px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 32px;
  }

  @media (max-width: 1600px) and (min-width: 1201px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (max-width: 1200px) and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
