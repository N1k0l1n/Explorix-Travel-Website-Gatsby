import * as React from "react";
import Layout from "../components/layout";
import { BrowserRouter } from "react-router-dom";

const IndexPage = () => {
  return (
    <BrowserRouter>
      {" "}
      <Layout>HIIOIs</Layout>
    </BrowserRouter>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
