import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/404";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
