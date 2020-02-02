import React, {Component} from 'react';
import LandingContent from './LandingContent';
import '../css/index.css';

class LandingPage extends Component {
    render() {
        return (
        <div className="LandingPage">
            <LandingContent/>
        </div>
        );
    }
}

export default LandingPage;