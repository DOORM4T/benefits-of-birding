import React from "react";
import Section from "./Section";

// Styled Components
import styled from "styled-components";

const CitationArea = styled.div`
  margin-top: 1rem;
  background-color: white;
  border-radius: 4px;
  text-align: left;
  padding: 2rem 1rem 0.5rem 1rem;
`;

const StyledCitation = styled.cite`
  color: white;
  font-family: monospace;
  background-color: black;
`;

const StyledSource = styled.p`
  text-align: right;
  color: black;
  margin-top: 1rem;
  text-shadow: none;
  font-weight: bold;
  font-size: 0.9rem;
`;

const BoldAnchor = styled.a`
  font-weight: 800;
  transition: transform 0.3s ease;
  padding: 0.2rem 1rem;
  border-radius: 4px;
  display: inline-block;
  color: gold;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledAnchor = styled.a`
  color: red;
`;

const Citation = () => {
  return (
    <Section
      title="The Benefits"
      render={() => (
        <CitationArea>
          <p>
            <StyledCitation>
              "Of five neighborhood nature characteristics tested, vegetation
              cover and afternoon{" "}
              <BoldAnchor href="#Visualization">bird abundances</BoldAnchor>{" "}
              were positively associated with a lower prevalence of depression,
              anxiety, and stress."
            </StyledCitation>
          </p>
          <StyledSource>
            - From the Overview of{" "}
            <StyledAnchor href="https://academic.oup.com/bioscience/article/67/2/147/2900179">
              "Doses of Neighborhood Nature: The Benefits for Mental Health of
              Living with Nature"
            </StyledAnchor>
          </StyledSource>
        </CitationArea>
      )}
    />
  );
};

export default Citation;
