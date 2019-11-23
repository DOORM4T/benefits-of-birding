import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  color: white;
  padding: 1rem 2rem;
  margin: 2rem 0;
`;

const StyledTitle = styled.h2`
  font-family: Poleno, sans-serif;
  color: gold;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  margin-right: 1rem;
  color: #058585;
  filter: brightness(80%);
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(100%);
  }
`;

const Section = ({ title = "", render }) => {
  return (
    <StyledSection>
      <StyledTitle id={title && title}>
        {title && <StyledAnchor href={`#${title}`}>#</StyledAnchor>}
        {title}
      </StyledTitle>
      <div>{render()}</div>
    </StyledSection>
  );
};

export default Section;
