import React, {Component} from 'react';
import LandingContent from './LandingContent';
import '../css/index.css';

class LandingPage extends Component {
    
    render() {
        const { name } = this.props;
        return (
            <section id={name}>
            <div id={name} className={name}>
                <LandingContent/>
            </div>
            </section>
        );
    }
}

export default LandingPage;