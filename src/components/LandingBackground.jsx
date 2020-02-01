import React, {Component} from 'react';
import LandingContent from './LandingContent';
import '../css/index.css';

class LandingBackground extends Component {
    render() {
        return (
        <div className="LandingBackground">
            {/* <div className="LandingContent">
                <h1>Vamsi Manne</h1>
                <p>Software Engineer. Learner. Creator.</p>
            </div> */}
            <LandingContent/>
        </div>
        );
    }
}

export default LandingBackground;