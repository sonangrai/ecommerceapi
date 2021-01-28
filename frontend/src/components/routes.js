import React from "react";
import { Route, Switch } from "react-router-dom";

import user_routes from "./user/routes";
import admin_routes from "./admin/routes";

export default function Routes() {
  return (
    <Switch>
      {/* Admin */}
      <Route path="/admin" component={admin_routes} />
      {/* USer */}
      <Route component={user_routes} />
    </Switch>
  );
}
