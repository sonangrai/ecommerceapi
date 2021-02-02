import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Home from "../Home";
import Profile from "../auth/Profile";
import Login from "../auth/Login";

const index = ({ isAuthenticated }) => {
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
        <Route component={Login} />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(index);
