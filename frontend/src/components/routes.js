import React from "react";
import { Route, Switch } from "react-router-dom";
import login from "./auth/login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/admin-login" component={login} />
    </Switch>
  );
}
