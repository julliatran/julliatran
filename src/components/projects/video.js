import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log(event.target)
  }
  render() {
    const opts = {
      height: '600',
      width: '900',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    const {videoId} = this.props
    return ( 
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
      />
    );
  }
}
export default Video;