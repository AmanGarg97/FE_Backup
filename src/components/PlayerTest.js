import React, { Component } from 'react'
import "../../node_modules/video-react/dist/video-react.css"; 
import { Player } from 'video-react';



class PlayerTest extends Component {
    render() {
        return <Player
            
            src="https://www.youtube.com/watch?v=U3RkDLtS7uY"
        />
    }
}

export default PlayerTest