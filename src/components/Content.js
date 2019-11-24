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
        title="Works Cited"
        render={() => {
          return (
            <p>
              Incididunt non enim fugiat nisi. Mollit sunt excepteur laborum
              quis esse magna incididunt irure sit ut veniam. Nulla quis non
              voluptate in voluptate non veniam aliqua. Lorem sunt ex enim aute
              anim qui et aute nostrud sit excepteur. Consectetur exercitation
              reprehenderit qui Lorem ea officia excepteur occaecat do magna
              officia consectetur cupidatat aliquip. Ullamco consequat aute
              incididunt eiusmod in culpa minim culpa quis aliqua. Sint ullamco
              elit sunt fugiat adipisicing culpa dolor elit culpa consectetur do
              nulla ipsum.
            </p>
          );
        }}
      />
    </main>
  );
};

export default Content;
