import React from "react";
import Section from "./Section";
import Carousel from "./Carousel";
import Citation from "./Citation";
import Visualization from "./Visualization";
import ColorText from "./ColorText";

import styled from "styled-components";

const AnimatedMain = styled.main`
  animation: fadeIn 0.4s ease-in 0.8s forwards;
  opacity: 0;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = () => {
  return (
    <AnimatedMain>
      {/* Info Sections */}
      <Section
        title="Birding"
        render={() => (
          <p>
            Is short for bird watching. Studies show that the number of birds we
            see in a day correlates with improved mental health. You don't even
            need to be a professional bird watcher to reap the benefits of
            birding!
          </p>
        )}
      />

      {/* Birds Carousel */}
      <Carousel />

      {/* Citation */}
      <Citation />

      {/* Chart.js Visualization */}
      <Visualization />

      {/*  */}
      <Section
        title="Explanation"
        render={() => {
          return (
            <div>
              <p>
                Going left to right from Normal to Extremely Severe, the average
                population of afternoon birds decreases. Likewise inversely,
                there is a correlation between the appearance of birds and
                mental health benefits, or reductions in Anxiety, Depression,
                and Stress levels.
              </p>
              <br />
              <p>
                Lower <ColorText color="red" text="Anxiety" />,{" "}
                <ColorText color="green" text="Depression" />, and{" "}
                <ColorText color="blue" text="Stress" /> levels correlate with
                higher average populations of afternoon birds.
              </p>
            </div>
          );
        }}
      />

      {/* Works Cited Section */}
      <Section
        title="Sources"
        render={() => {
          return (
            <ul style={{ listStyle: "none", textShadow: "none" }}>
              <li>
                Article:
                <br />
                <a href="https://academic.oup.com/bioscience/article/67/2/147/2900179">
                  Doses of Neighborhood Nature: The Benefits for Mental Health
                  of Living with Nature
                </a>
              </li>
              <br />
              <li>
                Royalty Free Images:{" "}
                <a href="https://www.pexels.com/">Pexels</a>
              </li>
            </ul>
          );
        }}
      />
    </AnimatedMain>
  );
};

export default Content;
