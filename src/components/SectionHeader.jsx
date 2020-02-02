import React, {Component} from 'react';
import '../css/index.css';

class SectionHeader extends Component {
    render() {
        return (
            <div className="SectionHeader">
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default SectionHeader;