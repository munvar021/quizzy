import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding-top: 60px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "0")};
  transition: margin-left 0.3s ease;
  overflow-x: hidden;
  max-width: ${({ isSidebarOpen }) =>
    isSidebarOpen ? "calc(100% - 250px)" : "100%"};
  padding: 0 24px; // Add horizontal padding to the content wrapper

  @media (max-width: 1600px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
    padding: 0 16px;
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
`;
