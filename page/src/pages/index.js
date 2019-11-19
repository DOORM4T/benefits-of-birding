import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"

const Home = () => (
  <Layout>
    <h1>The Benefits of Birding</h1>
    <Section wings={true} backgroundColor="white" color="red">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias
      doloribus suscipit a veritatis quasi ducimus repellat animi, dolore ea.
    </Section>

    <Section backgroundColor="#ddd" color="orange">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestias
      doloribus suscipit a veritatis quasi ducimus repellat animi, dolore ea.
    </Section>
  </Layout>
)

export default Home
