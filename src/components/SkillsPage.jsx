import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import SkillsContent from './SkillsContent';

class SkillsPage extends Component {
    render() {
        const { name } = this.props;
        return (
            <div id={name} className={name}>
                <SectionHeader name={name} color="white"/>
                <SkillsContent/>
            </div>
        );
    }
}

export default SkillsPage;