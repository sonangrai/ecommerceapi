import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "../Home";

const Layout = () => {
  return (
    <Fragment>
      <div className="dash__row">
        <div className="sidebar__part">
          <Sidebar />
        </div>
        <div className="maincontent__part">
          <Header />
          <div className="contents__box">
            <Switch>
              <Route exact path="/admin" component={Home} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
