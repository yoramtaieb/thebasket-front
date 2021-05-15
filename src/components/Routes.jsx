import React from "react";
import { Switch, Route } from "react-router-dom";
import Signin from "./atoms/Signin/Signin";

import Home from "./Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  );
}
