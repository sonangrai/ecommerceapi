import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Home from "../Home";
import Profile from "../auth/Profile";
import Login from "../auth/Login";
import Index from "../products/Index";
import Productdetail from "../products/Productdetail";
import Editproduct from "../products/Editproduct";

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
                <Route exact path="/admin/home" component={Home} />
                <Route exact path="/admin/profile" component={Profile} />
                <Route exact path="/admin/product" component={Index} />
                <Route
                  exact
                  path="/admin/product/:id"
                  component={Productdetail}
                />
                <Route
                  path="/admin/product/:pid/edit"
                  component={Editproduct}
                />
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
