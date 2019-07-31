import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import Select from 'react-select';


const options = [
    {
        key: 'Bangalore',
        value: 'Bangalore'
    },
    {
        key: 'Goa',
        value: "Goa"
    }
]
class TestSearch extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Select options={techCompanies} />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}

export default TestSearch