import React from "react";
import Header from "./Header";
import Section from "./Section";
import Carousel from "./Carousel";
import Citation from "./Citation";
import Visualization from "./Visualization";

// Global Styles
import "../main.css";

// Styled Components
import styled from "styled-components";
const StyledLayout = styled.article`
  width: 100%;
  background-color: #9794f1;
  box-shadow: 0 0 100vw 100vw rgba(0, 0, 0, 0.4), 5px 15px 10px black;
  border-radius: 4px;
  transition: width 0.3s ease, height 3s ease;

  @media (min-width: 768px) and (max-width: 1152px) {
    width: 80%;
    margin: 1rem auto;
  }
  @media (min-width: 1152px) {
    width: 50%;
    margin: 1rem auto;
  }
`;

const StyledBranding = styled.p`
  color: white;
  position: relative;
  top: 2rem;
  font-size: 1rem;
  background-color: red;
  display: block;
  width: 300px;
  padding: 0.2rem 1.7rem 0.4rem;
  border-radius: 4px 0 0 0;
  margin: 0 auto;
  text-align: center;
`;

const Layout = () => {
  return (
    <>
      <StyledLayout>
        {/* Page header with title and title image */}
        <Header />
        <main>
          {/* Info Sections */}
          <Section
            title="Birding"
            render={() => (
              <p>
                Is short for bird watching. Studies show that the number of
                birds we see in a day correlates with lower stress levels. And
                you don't even need to be a bird watcher!
              </p>
            )}
          />

          {/* Birds Carousel */}
          <Carousel />

          {/* Citation */}
          <Citation />

          {/* D3 Visualization */}
          <Visualization />

          {/* Works Cited Section */}
          <Section
            title="Works Cited"
            render={() => {
              return (
                <p>
                  Incididunt non enim fugiat nisi. Mollit sunt excepteur laborum
                  quis esse magna incididunt irure sit ut veniam. Nulla quis non
                  voluptate in voluptate non veniam aliqua. Lorem sunt ex enim
                  aute anim qui et aute nostrud sit excepteur. Consectetur
                  exercitation reprehenderit qui Lorem ea officia excepteur
                  occaecat do magna officia consectetur cupidatat aliquip.
                  Ullamco consequat aute incididunt eiusmod in culpa minim culpa
                  quis aliqua. Sint ullamco elit sunt fugiat adipisicing culpa
                  dolor elit culpa consectetur do nulla ipsum.
                </p>
              );
            }}
          />
        </main>
      </StyledLayout>
      <StyledBranding>
        A project by Matt Seto{" "}
        <span role="img" aria-label="Door Emoji">
          <a href="https://github.com/DOORM4T">🚪</a>
        </span>
      </StyledBranding>
    </>
  );
};

export default Layout;
