import { gql } from 'apollo-boost';

const addStoryQuery2 = gql`
{
  allStories{
    title
    id
  }
}
`


const getStoryQuery = gql`
{
  allStories{
    title
    id
    subStory{
      url,
      description,
      title
    }
  }
}
`

const getStoryForTag = gql`
query GetStoryForTag($tag: String!){
  StoryFeed(tag: $tag){
    title
    id
    subStory{
      url
    }
  }
}
`
const getVideoQuery = gql`
query GetVideo($query : String!,$limit:Int!){
    VideoFeed(query: $query , limit : $limit){
      videoId
      title
      url
    }
}
`
const getNewsQuery = gql`
query GetNews($query : String! , $limit : Int!){
        NewsFeed(query:$query , limit : $limit){
          description
          content
          title
          author
          url
          urlToImage
        }
      
}
`
const addStoryQuery = gql`
mutation($title: String! ,$tags: String!,$subStory:[CreateUserInput]!){
  addStory(title: $title,tags:$tags,subStory: $subStory){
    title
  }
}
`

const allTags = gql`
{
  allStories{
    tags
  }
}
`


export {
  addStoryQuery,
  addStoryQuery2,
  getStoryQuery,
  getVideoQuery,
  getNewsQuery,
  getStoryForTag,
  allTags
}