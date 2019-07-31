import React, { Component } from 'react';

var style = {
    backgroundImage: 'url(' + image + ')',
};
class App extends Component {

render() {
    return (
        <div>

            <header style={style} id={image} className="card-header">
                <h4 className="card-header--title">News</h4>
            </header>
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> Find out more
      </button>
            <div className="card-body">
                <p className="date">March 20 2015</p>

                <h2>{this.props.title}</h2>

                <p className="body-content">{this.props.text}</p>

                <Button />
            </div>
            <article className="card">
                <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'} />
                <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'} />
            </article>
        </div>
    );
}
}

export default App;
