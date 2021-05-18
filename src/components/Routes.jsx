import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./template/Layout";
import Signin from "./atoms/Signin/Signin";
import Signup from "./atoms/Signup/Signup";
import Wishlist from "./atoms/Wishlist/Wishlist";
import Categories from "./atoms/Categories/Categories";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/wishlist" component={Wishlist} />
    </Switch>
  );
}
