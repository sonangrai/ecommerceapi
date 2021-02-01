import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./auth/Login";
import Notfound from "./Notfound";
import Forgot from "./auth/Forgot";
import Newpassword from "./auth/Newpassword";

import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Home from "./Home";

import { connect } from "react-redux";
import Profile from "./auth/Profile";

const routes = ({ isAuthenticated }) => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/admin/login" component={login} />
          <Route exact path="/admin/forgot" component={Forgot} />
          <Route
            exact
            path="/admin/recover/:uid/:tid"
            component={Newpassword}
          />
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
          <Route component={Notfound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(routes);
