import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import store from "../store";

class UploadVid extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      usernameInput: reduxState.usernameInput,
      emailInput: reduxState.emailInput
      // passwordInput:reduxState.passwordInput,
      // videoInput: reduxState.videoInput
    };
  }
  handleChange(e, key) {
    this.this.setState({
      [key]: e.target.value
    });
  }

  render() {
    return (
      <div className="PostVid">
        <h1>Post Video</h1>

        <Link to="/Dashboard/Dashboard">
          <button>cancel</button>
        </Link>

        <Link to="/Editing/Editing">
          <button>next</button>
        </Link>
      </div>
    );
  }
}

export default UploadVid;
