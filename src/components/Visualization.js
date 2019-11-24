import React, { useRef, useEffect } from "react";
import Section from "./Section";
import Chart from "chart.js";
import "chart.js/dist/Chart.min.css";

// Styled Components
import styled from "styled-components";
const VisualizationDiv = styled.div`
  position: relative;
  margin-top: 1rem;
  background-color: #5b55f8;
  box-shadow: 0 0 10px black;
  padding: 1rem 2rem;
`;

const StyledCanvas = styled.canvas`
  max-height: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: white;
  border-radius: 4px;
`;

const StyledTitle = styled.h2`
  font-family: poleno, sans-serif;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1rem;
`;

const StyledSource = styled.a`
  text-align: left
  position: absolute;
  top:0.4rem;
  left:0.4rem;
  font-size: 0.5rem;
  color: gold;
`;

// D3 Visualization Component
const Visualization = () => {
  const canvasRef = useRef();

  // Initialize Chart
  useEffect(() => {
    new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: ["Normal", "Mild", "Moderate", "Severe", "Ex. Severe"],
        datasets: [
          {
            label: "Anxiety",
            data: [280, 240, 260, 230, 250],
            backgroundColor: "red"
          },
          {
            label: "Depression",
            data: [285, 275, 240, 260, 230],
            backgroundColor: "green"
          },
          {
            label: "Stress",
            data: [280, 240, 242, 230, 220],
            backgroundColor: "blue"
          }
        ],
        options: {
          responsive: true
        }
      }
    });
  }, []);

  return (
    <Section
      title="Visualization"
      render={() => {
        return (
          <VisualizationDiv>
            <StyledCanvas ref={canvasRef}></StyledCanvas>
            <StyledTitle>
              Mental Health & the Avg. Pop. of Afternoon Birds
              <StyledSource href="https://academic.oup.com/bioscience/article/67/2/147/2900179">
                Data from "Doses of Neighborhood Nature"
              </StyledSource>
            </StyledTitle>
          </VisualizationDiv>
        );
      }}
    />
  );
};

export default Visualization;
