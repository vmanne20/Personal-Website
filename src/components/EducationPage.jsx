import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import EducationContent from './EducationContent';

class EducationPage extends Component {
    render() {
        const { name } = this.props;
        return (
            <section id={name}>
            <div id={name} className={name}>
                <SectionHeader name={name} color="white"/>
                <EducationContent/>
            </div>
            </section>
        );
    }
}

export default EducationPage;