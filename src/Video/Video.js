import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <div className="Video">
        <div className="Video-Container">
          <ReactPlayer
            
            url="https://www.youtube.com/watch?v=lWA2pjMjpBs"
            playing
            controls
            class="my_class_name"
            width="640"
            height="460"
            frameborder="0"
            allowfullscreen
          />
          <ReactPlayer
            width="500px"
            height="200px"
            url="https://www.youtube.com/watch?v=LdH7aFjDzjI"
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
          width="500px"
          height="200px"
          url="https://www.youtube.com/watch?v=lWA2pjMjpBs"
          playing
          controls
          class="my_class_name"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        />

        <ReactPlayer
          width="500px"
          height="200px"
          url="https://www.youtube.com/watch?v=lWA2pjMjpBs"
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
