import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
`;

export const Header = styled.div`
  background: #1a237e;
  color: white;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const HeaderDescription = styled.p`
  font-size: 16px;
  opacity: 0.9;
`;

export const CategoryHeading = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #000;
`;

export const CategoriesSection = styled.div`
  margin: 30px 0;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const CategoryTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const CategoryButton = styled(Link)`
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 14px;
  background-color: ${(props) => {
    switch (props.category) {
      case "Verbal Reasoning":
        return "#9c7b43";
      case "Current Affairs":
        return "#4caf50";
      case "Interview":
        return "#7e57c2";
      case "Engineering":
        return "#ef5350";
      case "Puzzle":
        return "#ffb6c1";
      case "Programming":
        return "#26c6da";
      case "Online tests":
        return "#ba68c8";
      case "Technical MCQS":
        return "#d84315";
      case "Technical Short Answers":
        return "#2e7d32";
      case "Medical Science":
        return "#9575cd";
      case "General Aptitude":
        return "#ef5350";
      default:
        return "#9575cd";
    }
  }};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CategorySection = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  color: #4527a0;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Card = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: white;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${(props) => props.color || "#e3f2fd"};
  color: ${(props) => props.iconColor || "#1565c0"};
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;

export const CardSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
`;

export const ProgressCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.color || "#1565c0"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${(props) => props.color || "#1565c0"};
`;
