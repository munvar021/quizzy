import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, ContentWrapper, Main } from "./styles/AppStyles";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/home";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width > 768 && !isSidebarOpen) {
        setIsSidebarOpen(true);
      } else if (width <= 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Container>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        <ContentWrapper isSidebarOpen={isSidebarOpen}>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Main>
          <Footer />
        </ContentWrapper>
      </Container>
    </Router>
  );
};

export default App;
