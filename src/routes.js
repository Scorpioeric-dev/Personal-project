import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/DashBoard";
import Editing from "./Editing/Editing";
import Header from './Header/Header'
import UploadVid from './UploadVid/UploadVid'


export default (
  <Switch>
    
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Editing" component={Editing} />
    <Route path='/UploadVid' component={UploadVid}/>
  </Switch>
);
