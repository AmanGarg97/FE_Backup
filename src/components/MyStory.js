import React, { Component } from 'react';
import Bar from './ProgressBar'
import './MyStory.css';


// const stories = [{ url: 'https://picsum.photos/1080/1920' }, { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN' }]


const MyStyles = {
    height: '900px',
    // position: 'absolute'
}
class MyStory extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.switchImage = this.switchImage.bind(this);
        this.forwardClick = this.forwardClick.bind(this);
        this.reverseClick = this.reverseClick.bind(this);

        this.state = {
            currentImage: 0,
            // images: [
            //     "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            //     "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MzAvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzExMTA1NzIxNTkuanBn",
            //     "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg",
            //     "https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg"
            // ]
            images: this.props.stories
        };
    }

    progressBars() {
        return this.state.images.map(image => {
            return (
                <Bar/>
            )
        }
        )
    }

    switchImage() {
        // console.log(this.state.currentImage)
        if (this.state.currentImage < this.state.images.length) {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        }
        else {
            this.setState({
                currentImage: 0
            })
            this.props.onClick()
        }
        return this.currentImage;
    }

    forwardClick() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            })
        }

        else {
            this.props.onClick()
        }
    }

    reverseClick() {
        console.log("reverse  ", this.state.currentImage)
        if (this.state.currentImage === 0) {
            this.props.onClick()
        }

        else if (this.state.currentImage <= this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage - 1
            })
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.switchImage, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (
            <div className="container">
                {this.progressBars()}
                <button className="btn3" onClick={this.props.onClick}>X</button>
                <img
                    src={this.state.images[this.state.currentImage]}
                    alt=""
                />
                <button onClick={this.forwardClick} className="btn1">F</button>
                <button onClick={this.reverseClick} className="btn2">R</button>
            </div>

        );
    }
}


export default MyStory;
