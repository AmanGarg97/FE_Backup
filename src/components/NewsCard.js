import React, { Component } from 'react';
import { NewsHeaderCard } from 'react-ui-cards'
import './NewsCard.css'

class NewsCard extends Component {

   render() {
        return (
            <div className='card-container'>
                <NewsHeaderCard
                    href={this.props.link}
                    thumbnail={this.props.src}
                    title={this.props.title}
                    author={this.props.author}
                    date='July 29, 2019'
                />
            </div>
        );
    }
}

export default NewsCard;
