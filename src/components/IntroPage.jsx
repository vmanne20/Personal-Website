import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import IntroImage from './IntroImage';
import IntroContent from './IntroContent';

class IntroPage extends Component {
    render() {
        const { name } = this.props;
        return (
            <div id={name} className={name}>
                <SectionHeader name={name} color="white"/>
                <IntroImage/>
                <IntroContent/>
            </div>
        );
    }
}

export default IntroPage;