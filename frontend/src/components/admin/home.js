import React, { Fragment } from "react";
import Loader from "./layout/Loader";
import Title from "./layout/Title";

const Home = () => {
  return (
    <Fragment>
      <Title title="Dashboard - Pasal" />
      <Loader />
    </Fragment>
  );
};

export default Home;
