import * as React from "react";
import Layout from "../components/Layout";
import { BrowserRouter } from "react-router-dom";
import Hero from "../components/Hero";
import Trips from "../components/Trips";


const IndexPage = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Hero />
        <Trips />
      </Layout>
    </BrowserRouter>
  );
};

export default IndexPage;
