import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./auth/Login";
import Notfound from "./Notfound";
import Forgot from "./auth/Forgot";
import Newpassword from "./auth/Newpassword";

import index from "./layout/index";

const routes = () => {
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
          <Route component={index} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default routes;
