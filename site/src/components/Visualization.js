import React from "react"
import Section from "./Section"

// Styled Components
import styled from "styled-components"
const VisualizationDiv = styled.div`
  background-color: #5b55f8;
  height: 300px;
  box-shadow: 0 0 10px black;
  padding: 1rem 2rem;
`

// D3 Visualization Component
const Visualization = () => {
  return (
    <Section
      render={() => {
        return <VisualizationDiv>Visualization</VisualizationDiv>
      }}
    />
  )
}

export default Visualization
