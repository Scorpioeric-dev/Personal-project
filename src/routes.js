import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/DashBoard";
import Editing from "./Editing/Editing";
import UploadVid from "./UploadVid/UploadVid";
import Register from "./Register/Register";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/Editing" component={Editing} />
    <Route path="/UploadVid" component={UploadVid} />
    <Route path="/Register" component={Register} />
  </Switch>
);
