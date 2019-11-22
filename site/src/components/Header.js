import React from "react"
import magpie from "../images/magpie.png"

// Styled Components
import styled from "styled-components"
const StyledHeader = styled.header`
  font-family: poleno, sans-serif;
  color: white;
  background-color: #5b55f8;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  position: relative;
`

const StyledSubtitle = styled.h2`
  font-size: 1rem;
`

const StyledTitle = styled.h1`
  font-size: 1.5rem;

  @media screen and (max-width: 600px) {
    max-width: 60%;
  }
`

const Logo = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 60%;

  @media (max-width: 480px) {
    height: 40%;
  }
  @media (max-width: 350px) {
    height: 20%;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledSubtitle>What are...</StyledSubtitle>
      <StyledTitle>The Benefits of Birding?</StyledTitle>
      <Logo src={magpie} alt="magpie" />
    </StyledHeader>
  )
}

export default Header
