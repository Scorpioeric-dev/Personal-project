import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store from "../store";
import { setUser } from "../ducks/reducer";
import { connect } from "react-redux";
import HeaderImg from "./HeaderImg";

class Header extends Component {
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
  login = () => {
    const { emailInput: email, passwordInput: password } = this.state;
    axios
      .post("/controller/login", { email, password })
      .then(res => {
        const { username, email } = res.data.user;
        console.log(res.data);
        this.props.setUser({ username, email });
      })
      .catch(err => {
        alert("Try again.");
      });
  };
  //Create search function that maps over video api data

  render() {
    return (
      <div className="Header">
        <h1>Header</h1>
        <HeaderImg />

        <Link to="/UploadVid/UploadVid">
          <button onClick={this.login}>Login</button>
        </Link>
        <input
          onChange={e => this.handleChange(e, "passwordInput")}
          type="password"
          placeholder="Password"
        />

        <input
          onChange={e => this.handleChange(e, "emailInput")}
          type="text"
          placeholder="email Input"
        />
        <input
          onChange={e => this.handleChange(e, "Search")}
          type="Text"
          placeholder="Search"
        />
        <button>Search</button>
        <Link to="/UploadVid/UploadVid">
          <button>Post Videos</button>
        </Link>
        <Link to="/Register/Register">
          <button>Register</button>
        </Link>
      </div>
    );
  }
}
export default connect(
  null,
  { setUser }
)(Header);
