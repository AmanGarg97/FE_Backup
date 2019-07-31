import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Route } from 'react-router-dom'
import Select from 'react-select';
import { allTags } from './queries/query'
import { graphql, Query } from 'react-apollo'
import queryString from 'query-string'



//components
import DashBoard from './components/content-board/Dashboard'
import MainComponent from './components/MainComponent';
import SearchBar from './components/SearchBar';
// import SelectSearch from 'react-select-search'


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:2000/graphql',
})

const allStory = []
const fake_cities = []


const data = [
  {
    key: 'bangalore',
    value: 'Bangalore',
  },
  {
    key: 'Goa',
    value: 'Goa',
  },
];

// const cities = [];

const parsed = queryString.parse(location.search);
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: parsed.city,
      cities: '',
      data_fetched: false,
      call_func: true
    }
    // console.log(this.props.allTags)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.checkNewTags = this.checkNewTags.bind(this)


  }


  checkNewTags() {
    this.setState({
      cities: 'blr',
      data_fetched: true,
      call_func: false
    })
    console.log("checkfun  " , this.state.cities , this.state.data_fetched)
    // console.log(allStory)
    // for (var i = 0; i < allStory.length; i++) {
    //   if (typeof (fake_cities[fake_cities.findIndex(x => x.label == allStory[i].tags)]) == 'undefined') {
    //     fake_cities.push({
    //       label: allStory[i].tags,
    //       value: allStory[i].tags
    //     })
    //   }


    // }
    // console.log("fake cities", fake_cities)

    // this.setState({
    //   cities: fake_cities
    // })
    // return;
  }


  // handleSearchChange = (e) => {
  //   var city_array = this.state.cities;
  //   if (city_array[city_array.findIndex(x => x.label == 'Goa')]) {
  //     this.setState({
  //       query: e.value
  //     })
  //     var push_link = '/?city=' + e.value
  //     this.props.history.push(push_link);
  //   }

  // }

  rerenderParentCallback(){
    this.forceUpdate()
  }

  handleSearchChange = (e) => {
    // console.log("input change" , e.value)
    this.setState({
      query: e.value
    })


    var push_link = '/?city=' + e.value
    this.props.history.push(push_link);


  }


  render() {
    return (

      <div className='box-field'>
        <ApolloProvider client={client}>
          {/* <Query query={allTags}>{({ loading, error, data }) => {
            if (loading) return <p>Loading ...</p>;
            if (error) console.log(error)

            allStory = data.allStories;
            return data;
          }}</Query> */}
          {/* {console.log("haaha" , data.allStories) } */}
          {/* {this.state && this.state.call_func && this.checkNewTags()} */}
          {/* {this.checkNewTags()} */}
          {/* {this.state && this.state.data_fetched && */}
            <div className="">
              <Route exact path="/dashboard" component={DashBoard} />
              {/* <Route exact path="/" render={(routeProps) => (<Select {...routeProps} placeholder="Discover Incredible Places" options={allStory} onChange={e => this.handleSearchChange(e)} />)} /> */}
              <Route exact path="/" render={(routeProps) => (<SearchBar {...routeProps} options={allStory} rerenderParentCallback={this.rerenderParentCallback}/>)} />

              {/* <Route exact path="/" render={(routeProps) => (<MainComponent {...routeProps} city={this.state.query} arr={this.state.cities} />)} /> */}
              <br />
            </div>
        </ApolloProvider>
      </div>
    );
  }
}
export default (App);