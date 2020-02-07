import React, {Component} from 'react';
import '../css/index.css';
import {Grid} from '@material-ui/core';
import EducationCard from './EducationCard';

class EducationContent extends Component {
    render() {
        const tj = {
            link: 'https://tjhsst.fcps.edu/',
            image: require('../../static/images/canvas.png'),
            school: 'Thomas Jefferson High School for Science and Technology',
            location: 'Alexandria, VA',
            date: '2012-2016',
            description: 'Advanced Studies Diploma, Focus in Computer Science and Neuroscience'
        };

        const vt = {
            link: 'https://vt.edu/',
            image: require('../../static/images/canvas.png'),
            school: 'Virginia Tech',
            location: 'Blacksburg, VA',
            date: '2016-2019',
            description: 'Bachelors in Computer Science, Summa Cum Laude'
        };

        return(
            <div className="EducationContent">
                <Grid container>
                    <Grid container>
                        <EducationCard {...tj}/>
                        <EducationCard {...vt}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default EducationContent;