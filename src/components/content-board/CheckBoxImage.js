import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import { addStoryQuery } from '../../queries/query'
import './CheckBoxImage.css'


class CheckBoxImage extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            title: '',
            tag: '',
            selected_urls: []
        }
        console.log(this.props)
    }


    handleClick(link, tag) {
        this.state.selected_urls.push({ url: link })

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.tag === '') {
            alert("Please Enter Story Tag")
            return;
        }
        this.props.addStoryQuery({
            variables: {
                title: this.state.title,
                tags: this.state.tag,
                subStory: this.state.selected_urls
            }
        })
        this.setState({
            selected_urls: []
        })
        alert("Submitted")
       
        this.props.reRender()


    }



    display() {
        var i = 0;
        var id_var = '';
        return this.props.urls.map(url => {
            i += 1;
            id_var = 'cb' + i;
            return (
                <li><input type="checkbox" id={id_var} />
                    <label for={id_var}><img src={url.url} onClick={() => this.handleClick(url.url, url.tag)} alt='' /></label>
                </li>
            )
        })
    }

    render() {

        return (
            <div>
                <ul>
                    {this.display()}
                </ul>
                <br /><br />
                <form className="heading">
                    <h4>Enter the details of the story</h4>
                    <input
                        name='title'
                        value={this.state.title}
                        placeholder='Enter Title'
                        onChange={e => this.handleChange(e)} />
                    <br /><br />
                    <input
                        name='tag'
                        value={this.state.tag}
                        placeholder='Enter Story Tag'
                        onChange={e => this.handleChange(e)} />
                </form>
                <button className="heading" onClick={(e) => { this.onSubmit(e) }}>CREATE STORY</button>
            </div>
        );
    }
}

export default compose(
    graphql(addStoryQuery, { name: "addStoryQuery" })
)(CheckBoxImage);