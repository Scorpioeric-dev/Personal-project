import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import store from '../store'

class UploadVid extends Component {
  constructor(){
    super()
    const reduxState = store.getState()
    this.state = {
      usernameInput: reduxState.usernameInput,
      emailInput: reduxState.emailInput,
      // passwordInput:reduxState.passwordInput,
      videoInput: reduxState.videoInput[]
    };
  }
  handleChange(e,key){
    this.this.setState({
      [key]:e.target.value
    })
  }

  registerUser = () => {
    const {
      usernameInput: username,
      emailInput: email,
      passwordInput: password
    } = this.state;
    axios
      .post("/controller/register", { username, email, password, video })
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
      <div className="Editing">
      <input 
      onChange={e this.handleChange(e,'usernameInput')}
      type="text"
      placeholder='Username'/>
      <input 
      onChange={e this.handleChange(e,'emailInput')}
      type="text"
      placeholder='emailInput'/>
      <input 
      onChange={e this.handleChange(e,'passwordInput')}
      type="text"
      placeholder='Password'/>       











        <h1>Editing</h1>
        <button >Login</button>
        <button onClick={this.registerUser}>Register</button>
        <button>Email</button>
        <Link to='/Dashboard/Dashboard'>
        <button>cancel</button>
        </Link>
        <Link to='/Editing/Editing'>
        <button>next</button>
        </Link>
      </div>
    );
  }
}
