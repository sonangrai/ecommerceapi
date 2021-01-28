import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Home from "./Home";

const routes = () => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/admin/home" component={Home} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default routes;
