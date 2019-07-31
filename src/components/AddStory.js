import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {addStoryQuery2} from '../queries/query'

class AddStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Story_Title: "",
            Description: "",
            tag: "",

        }
    }
    submitForm(e) {
        e.preventDefault(); //not refresh the page
        console.log(this.state);
    }
    render() {
        return (
            <form id="add-story" onSubmit={this.submitForm.bind(this)}>
                <h2>All fields are necessary</h2>
                <div className="field">
                    <label>Story Title  </label>
                    <input type="text" onChange={(e) => this.setState({ Story_Title: e.target.value })} />
                </div>
                <br />
                <div className="field">
                    <label>Description  </label>
                    <input type="text" onChange={(e) => this.setState({ Description: e.target.value })} />
                </div>
                <br />
                <div className="field">
                    <label>Tag  </label>
                    <select onChange={(e) => this.setState({ tag: e.target.value })}>
                        <option>Select Tag</option>
                        <option>Goa</option>
                        <option>NightLife</option>
                        <option>Beach</option>
                        <option>Hills</option>
                    </select>
                </div>
                <br />
                <button> Add </button>
            </form>
        )
    }
}

export default graphql(addStoryQuery2)(AddStory);