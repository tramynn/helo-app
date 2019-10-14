import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddPost from "./Components/AddPost/AddPost";
import GuestLanding from "./Components/GuestLanding/GuestLanding";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={Dashboard} path="/dashboard" />
    <Route component={AddPost} path="/addPost" />
    <Route
      render={() => {
        return <h1>404 Page Not Found.</h1>;
      }}
    />
  </Switch>
);
