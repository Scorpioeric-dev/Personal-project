import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setUser } from "../ducks/reducer";
import { connect } from "react-redux";
import HeaderImg from "./HeaderImg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: '',
      emailInput: '',
      passwordInput: '',
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("/controller/getData")
      .then(res => {
        let {data} = res 
        this.props.setUser(
          {data} 
        );
      })
      .catch(err => {
        alert(err);
      });
  };
  componentDidUpdate(prevProps,prevState){
    if(
      prevState.videoData.length && prevState.videoData !== this.state.videoData.length
    ){
      this.getData()
    }
  }

  login = () => {
    let { emailInput: email, passwordInput: password } = this.state;
    email = email.toLowerCase();

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

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }
  //Create search function that maps over video api data

  render() {
    return (
      <div className="Header">
        <h1>Header</h1>
        <HeaderImg />
        <div className="inputs-container">
          <Link to="/PostVideo">
            <button onClick={this.login}>Login</button>
          </Link>

          <input
            onChange={e => this.handleChange(e, "emailInput")}
            type="text"
            placeholder="email Input"
          />
          <input
            onChange={e => this.handleChange(e, "passwordInput")}
            type="password"
            placeholder="Password"
          />
        </div>

        <input
          id="search"
          onChange={e => this.handleChange(e, "Search")}
          type="Text"
          placeholder="Search"
        />
        <button onClick={this.getData}>Search</button>
        <Link to="/PostVideo">
          <button>Post Videos</button>
        </Link>
        <Link to="/Register">
          <button>Register</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  const {video} = reduxState
  return {video}
}
export default connect(
  mapStateToProps,
  { setUser }
)(Header);
