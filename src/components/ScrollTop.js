import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #9794f1;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.75rem;
  border-radius: 2px;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(120%);
  }
`;

const ScrollTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0 }, { behavior: "smooth" });
  };

  return <StyledButton onClick={handleClick}>/\</StyledButton>;
};

export default ScrollTop;
