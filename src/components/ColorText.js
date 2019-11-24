import React from "react";
import { defaultCipherList } from "constants";
import styled from "styled-components";

const StyledText = styled.span`
  text-shadow: 0 1px 0px black;
  font-variant: small-caps;
  font-weight: 800;
`;

const ColorText = ({ color, text }) => {
  return <StyledText style={{ color }}>{text}</StyledText>;
};

export default ColorText;
