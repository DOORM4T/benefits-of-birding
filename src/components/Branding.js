import React from "react";
import ScrollTop from "./ScrollTop";

import styled from "styled-components";

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

const Branding = () => {
  return (
    <StyledBranding>
      A project by Matt Seto{" "}
      <span role="img" aria-label="Door Emoji">
        <a href="https://github.com/DOORM4T">🚪</a>
      </span>
      <ScrollTop />
    </StyledBranding>
  );
};

export default Branding;
