import React, { Component } from 'react';
import Stories from 'react-insta-stories'
import './Story.css'

const myStyles = {
    height: '1000px',
    width: '550px',
}
var stories = [];

class StoryTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            name: '',
            order: 0
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        if (this.state.showComponent) {
            this.setState({
                showComponent: false,
                name: 'show-story'
            });
        } else {
            this.setState({
                showComponent: true,
                name: 'hide-story'
            });
        }
    }


    render() {
        const story = this.props;
        stories = []
        for (let i = 0; i < story.subStory.length; i++) {
            var obj = {};
            obj["url"] = story.subStory[i].url;
            var obj2 = {};
            obj2["heading"] = story.storyTitle;
            obj["header"] = obj2;
            stories.push(obj);
        }
        return (
            <div className="subStory-div">
                <input className={this.state.name} type="image" src={story.subStory[0].url} onClick={this._onButtonClick} id="test_story"></input>
                <h4>{story.title}</h4>

                {((this.state.showComponent) && (stories.length > 0)) ?
                    <div className="child">
                        <button onClick={this._onButtonClick} className="close_button">X</button>
                        <Stories
                            stories={stories}
                            defaultInterval={1500}
                            width={570}
                            height={1000}
                            storyStyles={myStyles}
                            func={this._onButtonClick}
                        />

                    </div>
                    :
                    null
                }

            </div>
        );
    }
}

export default StoryTemplate;