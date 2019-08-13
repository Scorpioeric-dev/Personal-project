import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import store from "../store";

class Header extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      username: reduxState.username,
      email: reduxState.email
    };
  }

  render() {
    return (
      <div className="Header">
        <h1>Header</h1>
        <Link to="/UploadVid/UploadVid">
          <button>Create Videos</button>
        </Link>
        <button>Search Bar</button>
      </div>
    );
  }
}
export default Header;
