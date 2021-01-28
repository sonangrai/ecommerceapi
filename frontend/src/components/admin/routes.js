import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Layout from "./layout/Layout";
import login from "./auth/login";

const routes = () => {
  return (
    <Fragment>
      <Route exact path="/admin/login" component={login} />
      <Route exact path="/admin/" component={Layout} />
    </Fragment>
  );
};

export default routes;
