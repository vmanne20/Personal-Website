import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import EducationContent from './EducationContent';

class EducationPage extends Component {
    render() {
        return (
        <div className="EducationPage">
            <SectionHeader name="Education" color="black"/>
            <EducationContent/>
        </div>
        );
    }
}

export default EducationPage;