import React, {Component} from 'react';
import '../css/index.css';

class IntroContent extends Component {
    render() {
        return (
            <section className="star-wars">
                <div className="crawl">
                    <div class="title">
                        <h1>Vamsi Manne</h1>
                        <p>Software Engineer. Learner. Creator.</p>
                    </div>
                    <p>
                        Hi! My name is Vamsi Manne, and I am software engineer seeking to learn new technologies
                        and build customer-centric products. I went to Thomas Jefferson High School for Science
                        and Technology, and graduated from Virginia Tech with a Bachelors in Computer Science degree.
                    </p>
                </div>
            </section>
            
        );
    }
}

export default IntroContent;