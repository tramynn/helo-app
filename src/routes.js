import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddPost from "./Components/AddPost/AddPost";
import GuestLanding from "./Components/GuestLanding/GuestLanding";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={Dashboard} exact path="/dashboard" />
    <Route component={AddPost} exact path="/addPost" />
  </Switch>
);
