import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/DashBoard";
import PostVideo from "./PostVideo/PostVideo";
import Register from "./Register/Register";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/PostVideo" component={PostVideo} />
    <Route path="/Register" component={Register} />
  </Switch>
);
