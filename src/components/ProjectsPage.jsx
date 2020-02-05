import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import ProjectsContent from './ProjectsContent';

class ProjectsPage extends Component {
    render() {
        return (
        <div className="ProjectsPage">
            <SectionHeader name="Projects" color="white"/>
            <ProjectsContent/>
        </div>
        );
    }
}

export default ProjectsPage;