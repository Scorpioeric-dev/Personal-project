import React, { Component } from "react";
import {Link} from 'react-router-dom'
import store from '../store'
import axios from 'axios'
import {connect} from 'react-redux'

class Editing extends Component {
  constructor(){
    super()
    const reduxState = store.getState()
    this.state = {

    }
  }
  handleChange(e,key){
    this.this.setState({
      [key]:e.target.value
    })
  }
  







  render() {
    return (
      <div className="Editing">
        <h1>Editing</h1>
        <Link to="/Dashboard/Dashboard">
          <button>cancel</button>
        </Link>
        <button>Complete</button>
      </div>
    );
  }
}

export default Editing

