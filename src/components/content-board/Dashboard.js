import React, { Component } from 'react';
import CheckBoxImage from './CheckBoxImage';
import { throwServerError } from 'apollo-link-http-common';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this)
        this.state = {
            tag: ' ',
            urls: [],
            showImages: false,
            refresh: false,
        };
        console.log(this.props)
        this.reRender = this.reRender.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    reRender(){
        console.log("rerender call")
        this.setState({
            refresh: !this.state.refresh,
            showImages: false
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.fetchData(this.state.tag)
    }


    async fetchData(tag) {
        this.setState({ urls: [] })
        let hit_url = new URL('https://api.unsplash.com/search/photos/')
        var params = {client_id : '0c818841f7cdf80f3c67be359441bf7e3a0982757411a1faffbf6c0cdad7d205' ,query: tag}
        hit_url.search = new URLSearchParams(params)
        await fetch(hit_url)
            .then(res => res.json())
            .then(body => {
                var data = (body);
                var length = data.results.length;
                for (var i = 0; i < length; i++) {
                    if (length === 0) {
                        break;
                    }
                    var url = data.results[i].urls.raw;
                    this.state.urls.push({ url, tag })
                }
            })
            .catch(error => console.log(error));

        //Second API

        hit_url = new URL('https://api.pexels.com/v1/search/')
        params = {per_page : '50' , page: '1' , query: tag}
        hit_url.search = new URLSearchParams(params)

        await fetch(hit_url,{
            headers: {
                'Authorization': '563492ad6f91700001000001c3b17333909346f89919fd61da20522a'
            }
        })
            .then(res => res.json())
            .then(body => {
                var data = (body);
                var length = data.photos;
                for (var i = 0; i < length; i++) {
                    if (length === 0) {
                        break;
                    }
                    var url = data.photos[i].src.original;
                    this.state.urls.push({ url, tag })
                }
            })
            .catch(error => console.log(error));
        this.setState({ showImages: true })


    }

    displayImages() {
        return (
            <div>
                <h4 className="heading">Select Images</h4>
                <CheckBoxImage urls={this.state.urls} reRender={this.reRender} />

            </div>

        )
    }

    render() {
        return (
            <div>
                <h1 className="heading">Content DashBoard</h1>
                <form className="heading">
                    <input
                        name='tag'
                        value={this.state.tag}
                        placeholder='Enter Tags'
                        onChange={e => this.handleChange(e)} />

                    <button onClick={(e) => this.onSubmit(e)}>Get Images</button>
                </form>
                {this.state.showImages ?
                    this.displayImages()
                    :
                    null
                }
            </div >
        )
    }
}

export default DashBoard;
