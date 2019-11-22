import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  color: white;
  padding: 1rem 2rem;
`

const StyledTitle = styled.h2`
  font-family: Poleno, sans-serif;
  color: #e0f19d;
`

const StyledAnchor = styled.a`
  text-decoration: none;
  margin-right: 1rem;
  color: #058585;
`

const Section = ({ title = "", render }) => {
  return (
    <StyledSection>
      <StyledTitle id={title && title}>
        {title && <StyledAnchor href={`#${title}`}>#</StyledAnchor>}
        {title}
      </StyledTitle>
      <div>{render()}</div>
    </StyledSection>
  )
}

export default Section
