import React, { Component } from 'react';


class MyCard extends Component {


    render() {
        return (
            <div className="youtube-div">
                <iframe className="youtube-iframe" width="200" height="170" src="https://www.youtube.com/embed/Gl7ABg9lnBM" frameborder="0" allowFullScreen controls="0"></iframe>

                <h4 className="youtube-heading">I am titile</h4>
                {/* <iframe className="youtube-iframe" width="200" height="170" src="https://www.youtube.com/embed/Gl7ABg9lnBM" frameborder="0" allowFullScreen autoPlay></iframe>

                <span>
                    <h4 className="youtube-heading">I am titile</h4>
                </span> */}
            </div>


        );
    }
}

export default MyCard;
