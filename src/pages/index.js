import * as React from "react";
import Layout from "../components/Layout";
import { BrowserRouter } from "react-router-dom";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Hero />
      </Layout>
    </BrowserRouter>
  );
};

export default IndexPage;
