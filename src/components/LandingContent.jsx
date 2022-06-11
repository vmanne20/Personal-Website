import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import '../css/index.css';

class LandingContent extends Component {
    render() {
        return (
            <div className="LandingContent">
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6} lg={4}>
                        <div>
                            <h1>Vamsi Manne</h1>
                            <p>Software Engineer. Learner. Creator.</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }  
}

export default LandingContent;