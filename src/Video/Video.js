import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (

      <div className='Video'>
      <span>Title:</span>
      <ReactPlayer  width="200px"  height="200px" id='step1' url="https://www.youtube.com/watch?v=LdH7aFjDzjI" playing controls />
      <div className='Video-Container'>
      <h5>Title:</h5>
      <ReactPlayer width="200px"  height="200px" url="https://www.youtube.com/watch?v=LdH7aFjDzjI" playing controls />
      </div>
      <h1>Title:</h1>
      <ReactPlayer width="200px"  height="200px" url="https://www.youtube.com/watch?v=LdH7aFjDzjI" playing controls />
      <h1>Title:</h1>
      <ReactPlayer width="200px"  height="200px" url="https://www.youtube.com/watch?v=JF8BRvqGCNs" playing controls />
      <h1>Title:</h1>
      <ReactPlayer width="200px"  height="200px" url="https://www.youtube.com/watch?v=JF8BRvqGCNs" playing controls />
      <h1>Title:</h1>
      <ReactPlayer width="200px"  height="200px" url="https://www.youtube.com/watch?v=JF8BRvqGCNs" playing controls />
     
     
      </div>
      
      ) 
  }
}
export default Video