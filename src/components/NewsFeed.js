import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getNewsQuery } from '../queries/query'
import NewsCard from './NewsCard';


class NewsFeed extends Component {

    getNews() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading . . .</div>)
        } else {
            return data.NewsFeed.map(news => {
                // console.log(news.urlToImage)
                return (
                    // <div className="box-field">
                    //     <img src={news.urlToImage} alt=""/>
                    //     <a href={news.url}><h4>{news.title}</h4></a>
                    // </div>
                    // <CardTemplate src={news.urlToImage} link={news.url} title={news.title}/>

                    <NewsCard src={news.urlToImage} link={news.url} title={news.title} description={news.description} author={news.author} />
                )
            }
            )
        }
    }
    render() {
        return (

            <div>
                <h2 className="dashed-shadow hello">News Feed</h2>
                <div className="news-div">
                    {this.getNews()}

                </div>

            </div>

        );
    }
}

export default graphql(getNewsQuery, {
    options: (props) => {
        return {
            variables: {
                query: 'Travel',
                limit: 2
            }
        }
    }
})(NewsFeed);
