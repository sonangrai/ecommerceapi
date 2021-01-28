import React from "react";
import { Route, Switch } from "react-router-dom";
import login from "./admin/auth/login";

import user_routes from "./user/routes";
import admin_routes from "./admin/routes";

export default function Routes() {
  return (
    <Switch>
      {/* Admin */}
      <Route exact path="/admin-login" component={login} />
      <Route component={admin_routes} />
      {/* USer */}
      <Route component={user_routes} />
    </Switch>
  );
}
