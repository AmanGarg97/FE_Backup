import React, { Component } from 'react';
import YouTube from 'react-youtube';

const opts = {
    height: '150',
    width: '200',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    },
};





class VideoPlayer extends Component {

    render() {
        return (
            <YouTube
                videoId="HOGBEOx7NTg"
                opts={opts}
                onReady={this._onReady}
                controls='0'
            />
        );
    }
}

export default (VideoPlayer);
