import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import ProjectsContent from './ProjectsContent';

class ProjectsPage extends Component {
    render() {
        const { name } = this.props;
        return (
            <section id={name}>
            <div id={name} className={name}>
                <SectionHeader name={name} color="white"/>
                <ProjectsContent/>
            </div>
            </section>
        );
    }
}

export default ProjectsPage;