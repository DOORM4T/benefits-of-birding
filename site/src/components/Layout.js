import React from "react"
import Header from "./Header"
import Section from "./Section"
import Carousel from "./Carousel"
import Visualization from "./Visualization"

// Global Styles
import "../main.css"

// Styled Components
import styled from "styled-components"
const StyledLayout = styled.article`
  width: 100%;
  background-color: #9794f1;
  box-shadow: 5px 15px 30px black;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 1rem auto;
  }
`

const StyledBranding = styled.p`
  color: white;
  position: relative;
  top: 2rem;
  margin-left: calc(100% - 180px - 1rem);
  font-size: 0.8rem;
  background-color: red;
  display: block;
  max-width: 180px;
  padding: 0 1rem 0.2rem 1rem;
`

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
              )
            }}
          />
        </main>
      </StyledLayout>
      <StyledBranding>
        A project by Matt Seto <a href="https://github.com/DOORM4T">🚪</a>
      </StyledBranding>
    </>
  )
}

export default Layout
