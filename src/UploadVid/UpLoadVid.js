import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import store from "../store";
import {connect} from 'react-redux'
import {logout} from '../ducks/reducer'
import {withRouter} from 'react-router-dom'

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

  logout = () => {
    axios.delete("/controller/logout").then(() => {
      this.props.logout();
      this.props.history.push("/");
    });
  };

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
        <button onClick={this.logout}></button>
      </div>
    );
  }
}
function mapStateToProps(reduxState){
  const {username}= reduxState
  return{username}
}

export default connect(
  mapStateToProps,{logout}
)(withRouter(UploadVid))
