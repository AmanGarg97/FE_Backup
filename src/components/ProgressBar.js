import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'rc-progress';

class Bar extends Component {
    constructor() {
        super();
        this.state = {
            percent: 0,
        };
        this.increase = this.increase.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
        this.increase();
    }

    increase() {
        const { percent } = this.state;
        const newPercent = percent + 1;
        if (newPercent >= 100) {
            clearTimeout(this.tm);
            return;
        }
        this.setState({ percent: newPercent });
        this.tm = setTimeout(this.increase, 20);
    }

    restart() {
        clearTimeout(this.tm);
        this.setState({ percent: 0 }, () => {
            this.increase();
        });
    }


    render() {
        const { percent } = this.state;
        return (
            <div style={{ margin: 10, width: 200, display: 'inline' }}>
                <Line strokeWidth="1" percent={percent} />

            </div>
        );
    }
}

export default Bar;
