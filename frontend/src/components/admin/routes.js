import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import login from "./auth/Login";
import Notfound from "./Notfound";
import Forgot from "./auth/Forgot";
import Newpassword from "./auth/Newpassword";

import index from "./layout/index";
import "../../assets/admin/main.css";

const routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/admin/login" component={login} />
        <Route exact path="/admin/forgot" component={Forgot} />
        <Route exact path="/admin/recover/:uid/:tid" component={Newpassword} />
        <Route component={index} />
        <Route path="*" component={Notfound} />
      </Switch>
    </Fragment>
  );
};

export default routes;
