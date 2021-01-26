import React from "react";
import { Route, Switch } from "react-router-dom";
import login from "./admin/auth/login";
import home from "./admin/home";

import user_routes from "./user/routes";

export default function Routes() {
  return (
    <Switch>
      {/* Admin */}
      <Route exact path="/admin-login" component={login} />
      <Route exact path="/admin/" component={home} />
      {/* USer */}
      <Route component={user_routes} />
    </Switch>
  );
}
