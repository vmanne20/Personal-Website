import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import EmploymentContent from './EmploymentContent';

class EmploymentPage extends Component {
    render() {
        return (
        <div className="EmploymentPage">
            <SectionHeader name="Employment" color="white"/>
            <EmploymentContent/>
        </div>
        );
    }
}

export default EmploymentPage;