import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "../Home";

const Layout = () => {
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

export default Layout;
