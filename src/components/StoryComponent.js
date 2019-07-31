import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import StoryTemplate from './StoryTemplate'
import { getStoryQuery } from '../queries/query'
// import './Story.css'


class StoryComponent extends Component {
  displayStory() {
    var data = this.props.data;
    if (data.loading) {
      return (<div>Loading Stories . . .</div>)
    } else {
      return data.allStories.map(story => {
        return (
          <div id="card--content" key={story.id}>
            <StoryTemplate key={story.id} storyTitle={story.title} subStory={story.subStory} />
          </div>
        )
      }
      )
    }
  }
  render() {
    return (
      <div className=''>
        <div className="heading-div">
          <div className="hello">Trending Stories!</div>
        </div>
        <section id="card">
          {this.displayStory()}
        </section>
      </div>
    )
  }
}

export default graphql(getStoryQuery)(StoryComponent);