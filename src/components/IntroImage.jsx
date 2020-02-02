import React, {Component} from 'react';
import '../css/index.css';

class IntroImage extends Component {
    render() {
        return (
            <div className="IntroImage">
                <img className="profilePic" src={require("../../static/images/prof_pic.jpeg")}/>
            </div>
        );
    }
}

export default IntroImage;