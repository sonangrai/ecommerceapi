import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Loader from "./layout/Loader";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Dashboard - Pasal</title>
      </Helmet>
      <Loader />
    </Fragment>
  );
};

export default Home;
