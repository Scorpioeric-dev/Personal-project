import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import store from "../store";
import { setUser } from "../ducks/reducer";
import { connect } from "react-redux";

class Register extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      usernameInput: reduxState.usernameInput,
      emailInput: reduxState.emailInput,
      passwordInput: reduxState.passwordInput
    };
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }
  registerUser = () => {
    let {
      usernameInput: username,
      emailInput: email,
      passwordInput: password
    } = this.state;
     username = username.toLowerCase()
     email = email.toLowerCase()
     console.log(username,email)
    axios
      .post("/controller/register", { username, email, password })

      .then(res => {
        this.props.setUser({ username, email });
        this.props.history.push("/Header");
      })
      .catch(err => {
        alert("Already in use");
      });
  };

  render() {
    return (
      <div className="Register">
        <h1>Register</h1>
        <input
          onChange={e => this.handleChange(e, "passwordInput")}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={e => this.handleChange(e, "usernameInput")}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={e => this.handleChange(e, "emailInput")}
          type="text"
          placeholder="email Input"
        />
        <Link to="/UploadVid/UpLoadVid">
          <button onClick={this.registerUser}>Enter</button>
        </Link>
      </div>
    );
  }
}
//create link to take user to editing page

export default connect(
  null,
  { setUser }
)(Register);
