import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import '../css/index.css';

class LandingContent extends Component {
    render() {
        const { name } = this.props;
        return (
            <div className={`${name}Content`}>
                <div className="LandingHeader">
                    <h1>Vamsi Manne</h1>
                    <p>Software Engineer. Learner. Creator.</p>
                </div>
            </div>
        );
    }
}

export default LandingContent;