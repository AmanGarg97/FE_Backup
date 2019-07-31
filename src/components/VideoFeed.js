import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { getVideoQuery } from '../queries/query'
import { graphql } from 'react-apollo'
import CardTemplate from './CardTemplate'
import YouTube from 'react-youtube';
import ReactYoutubeCard from './ReactYoutubeCard'



const opts = {
    height: '80',
    width: '120',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    },
};

class VideoFeed extends Component {
    getVideos() {
        var data = this.props.data;

        if (data.loading) {
            return (
                <div>Loading . . .</div>
            )
        } else {
            return data.VideoFeed.map(video => {
                console.log(video)
                return (
                    // <div>
                    //     <YouTube
                    //         videoId={video.videoId}
                    //         opts={opts}
                    //         onReady={this._onReady}
                    
                    //     />
                    //     <h6>{video.title}</h6>
                    // </div>
                    // <CardTemplate src={video.url} link={video.url} title={video.title} />
                    <ReactYoutubeCard videoId={video.videoId}/>
                //     <div
                //     className="video"
                //     // style={{
                //     //   position: "relative",
                //     //   paddingBottom: "56.25%" /* 16:9 */,
                //     //   paddingTop: 25,
                //     //   height: 0
                //     // }}
                //   >
                //     <iframe
                //       style={{
                //         width: "100%",
                //         height: "100%"
                //       }}
                //       src={`https://www.youtube.com/embed/c6t3bW7kx6E`}
                //       frameBorder="0"
                //     />
                //   </div>
                )
            }
            )
        }
    }
    render() {
        return (
            <div className="video-div">
                <h2 className="dashed-shadow hello">Video Feed</h2>
                <div className="video-div">
                    {this.getVideos()}

                </div>


            </div>

        );
    }
}

export default graphql(getVideoQuery, {
    options: (props) => {
        return {
            variables: {
                query: 'Bangalore Travel Vlog',
                limit: 2
            }
        }
    }
})(VideoFeed);
