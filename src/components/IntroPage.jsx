import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import IntroImage from './IntroImage';
import IntroContent from './IntroContent';

class IntroPage extends Component {
    render() {
        return (
        <div className="IntroPage">
            <SectionHeader name="INTRODUCTION"/>
            <IntroImage/>
            <IntroContent/>
        </div>
        );
    }
}

export default IntroPage;