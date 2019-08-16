import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (

      <div className='Video'>
      <div className='Video-Container'>
      <h5>Title:</h5>
      <ReactPlayer  width="500px"  height="200px"  url="https://www.youtube.com/watch?v=LdH7aFjDzjI" playing controls />
      <h5>Title:</h5>
      <ReactPlayer width="500px"  height="200px" url="https://www.youtube.com/watch?v=LdH7aFjDzjI" playing controls />
      </div>
      <h5>Title:</h5>
      <ReactPlayer width="500px"  height="200px" url="https://www.youtube.com/watch?v=lWA2pjMjpBs" playing controls />
      <h5>Title:</h5>
      <ReactPlayer width="500px"  height="200px" url="https://www.youtube.com/watch?v=lWA2pjMjpBs" playing controls />
     
     
     
      </div>
      
      ) 
  }
}

export default Video