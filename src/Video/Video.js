import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <>
      <ReactPlayer url="https://www.youtube.com/watch?v=JF8BRvqGCNs" playing controls />
      <ReactPlayer url="https://www.youtube.com/watch?v=UuKqvE5Db2c" playing controls />
      </>
      
      ) 
  }
}
export default Video