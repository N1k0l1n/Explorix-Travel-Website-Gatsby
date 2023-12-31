import * as React from "react";
import Layout from "../components/Layout";
import { BrowserRouter } from "react-router-dom";
import Hero from "../components/Hero";
import Trips from "../components/Trips";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Email from "../components/Email";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Hero />
        <Trips heading="Our Favorite Destinations" />
        <Testimonials />
      </Layout>
      <Stats />
      <Email />
      <Footer />
    </BrowserRouter>
  );
};

export default IndexPage;
