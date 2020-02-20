import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import SkillsContent from './SkillsContent';

class SkillsPage extends Component {
    render() {
        return (
        <div className="SkillsPage">
            <SectionHeader name="Skills" color="white"/>
            <SkillsContent/>
        </div>
        );
    }
}

export default SkillsPage;