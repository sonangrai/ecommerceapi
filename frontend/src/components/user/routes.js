import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../assets/font/flaticon.css";
import "../../assets/user/main.css";

import customer_login from "./auth/Login";
import Home from "./home/Home";

export default function Routes() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/login" component={customer_login} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Fragment>
  );
}
