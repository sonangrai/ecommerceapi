import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import login from "./auth/login";
import Notfound from "./Notfound";

const routes = () => {
  return (
    <Fragment>
      <Router>
        <Route exact path="/admin/login" component={login} />
        <Route exact path="/admin/" component={Layout} />
        <Route component={Notfound} />
      </Router>
    </Fragment>
  );
};

export default routes;
