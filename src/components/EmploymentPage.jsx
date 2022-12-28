import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import EmploymentContent from './EmploymentContent';

class EmploymentPage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.employmentPage = React.createRef();
    // }

    render() {
        const { name } = this.props;
        return (
            <section id={name}>
                <div id={name} className={name}>
                    <SectionHeader name={name} color="white"/>
                    <EmploymentContent/>
                </div>
            </section>
        );
    }
}

export default EmploymentPage;