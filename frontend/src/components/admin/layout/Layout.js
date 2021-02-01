import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "../Home";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import login from "../auth/Login";
import Profile from "../auth/Profile";

const Layout = ({ isAuthenticated }) => {
  return (
    <Fragment>
      {isAuthenticated ? (
        <div className="dash__row">
          <div className="sidebar__part">
            <Sidebar />
          </div>
          <div className="maincontent__part">
            <Header />
            <div className="contents__box">
              <Switch>
                <Route exact path="/admin" component={Home} />
                <Route exact path="/admin/profile" component={Profile} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <Route component={login} />
      )}
    </Fragment>
  );
};

Layout.protoTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Layout);
