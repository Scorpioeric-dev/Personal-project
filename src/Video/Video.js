import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <div className="Video">
        <div className="Video-Container">
          <ReactPlayer
            
            url="https://www.youtube.com/watch?v=slNA1zsY-E4"
            playing
            controls
            class="my_class_name"
            width="640"
            height="560"
            frameborder="0"
            allowfullscreen
          />
          <ReactPlayer
           
            url="https://www.youtube.com/watch?v=7rcMzc7r8mU"
            playing
            controls
            class="my_class_name"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          />
        </div>

        <ReactPlayer
         
          url="https://www.youtube.com/watch?v=--QTFD23mWw"
          playing
          controls
          class="my_class_name"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        />

        <ReactPlayer
         
          url="https://www.youtube.com/watch?v=LvsfVyJo194"
          playing
          controls
          class="my_class_name"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        />
      </div>
    );
  }
}

export default Video;
