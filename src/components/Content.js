import React from "react";
import Section from "./Section";
import Carousel from "./Carousel";
import Citation from "./Citation";
import Visualization from "./Visualization";
import ColorText from "./ColorText";

const Content = () => {
  return (
    <main>
      {/* Info Sections */}
      <Section
        title="Birding"
        render={() => (
          <p>
            Is short for bird watching. Studies show that the number of birds we
            see in a day correlates with lower stress levels. And you don't even
            need to be a bird watcher!
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
        title="Source"
        render={() => {
          return (
            <a
              style={{ textShadow: "none", color: "blue" }}
              href="https://academic.oup.com/bioscience/article/67/2/147/2900179"
            >
              Doses of Neighborhood Nature: The Benefits for Mental Health of
              Living with Nature
            </a>
          );
        }}
      />
    </main>
  );
};

export default Content;
