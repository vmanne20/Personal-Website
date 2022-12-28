import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import '../css/index.css';
import IntroImage from './IntroImage';

class LandingContent extends Component {
    render() {
        const { name } = this.props;
        return (
            <div className={`${name}Content`}>
                <div>
                    <IntroImage/>
                </div>
                <div className="LandingHeader">
                    <h1>Vamsi Manne</h1>
                    <p>Software Engineer, Learner and Creator</p>
                </div>
                {/* <div>
                    // contact icons
                </div> */}
            </div>
        );
    }
}

export default LandingContent;