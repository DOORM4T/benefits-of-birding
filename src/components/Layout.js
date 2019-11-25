import React, { useLayoutEffect, useRef } from "react";
import Header from "./Header";
import Content from "./Content";
import Branding from "./Branding";

// Global Styles
import "../main.css";

// Styled Components
import styled from "styled-components";
const StyledLayout = styled.article`
  width: 100%;
  background-color: #9794f1;
  box-shadow: 0 0 100vw 100vw rgba(0, 0, 0, 0.4), 5px 15px 10px black;
  border-radius: 8px;
  transition: width 0.3s ease, height 3s ease;
  padding: 0 0 1rem 0;

  @media (min-width: 768px) and (max-width: 1152px) {
    width: 80%;
    margin: 1rem auto;
  }
  @media (min-width: 1152px) {
    width: 50%;
    margin: 1rem auto;
  }
`;

const Layout = () => {
  const hiddenRef = useRef(null);
  useLayoutEffect(() => {
    hiddenRef.current.classList.remove("hidden");
  }, []);

  return (
    <article className="layout hidden" ref={hiddenRef}>
      <StyledLayout>
        <Header />
        <Content />
      </StyledLayout>
      <Branding />
    </article>
  );
};

export default Layout;
