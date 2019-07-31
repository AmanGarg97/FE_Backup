import React, { Component } from 'react';
import YouTube from 'react-youtube-embed'

class App extends Component {
    render() {
        return (

            <div className='card-container'>
                <YouTube id={this.props.videoId} />
            </div>
        );
    }
}

export default App;
