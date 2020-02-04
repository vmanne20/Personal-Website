import React, {Component} from 'react';
import '../css/index.css';
import {Grid} from '@material-ui/core';
import EmploymentCard from './EmploymentCard';

class EmploymentContent extends Component {
    render() {
        const microsoft = {
            company: 'Microsoft',
            link: 'https://www.microsoft.com/en-us/',
            image: require('../../static/images/microsoft.png'),
            title: 'Software Engineer',
            location: 'Redmond, WA',
            date: 'March 2020 - Present',
            description: 'Working on the Localization team in the Azure Commerce and Ecosystems org.'
        };

        const aws = {
            company: 'Amazon Web Services',
            link: 'https://aws.amazon.com/',
            image: require('../../static/images/aws.png'),
            title: 'Software Development Engineer Intern',
            location: 'Herndon, VA',
            date: 'May 2019 - August 2019',
            description: 'Working on the Localization team in the Azure Commerce and Ecosystems org.'
        };

        const amazon = {
            company: 'Amazon',
            link: 'https://www.amazon.com/',
            image: require('../../static/images/amazon.png'),
            title: 'Software Development Engineer Intern',
            location: 'Seattle, WA',
            date: 'May 2018 - August 2018',
            description: 'Working on the Localization team in the Azure Commerce and Ecosystems org.'
        };

        const caci = {
            company: 'CACI',
            link: 'https://www.caci.com/',
            image: require('../../static/images/caci.png'),
            title: 'Software Engineer Intern',
            location: 'Sterling, VA',
            date: 'May 2017 - August 2017',
            description: 'Working on the Localization team in the Azure Commerce and Ecosystems org.'
        };

        return (
            <div className="EmploymentContent">
                <Grid container spacing={5}>
                    <EmploymentCard {...microsoft}/>
                    <EmploymentCard {...aws}/>
                    <EmploymentCard {...amazon}/>
                    <EmploymentCard {...caci}/>
                </Grid>
            </div>
        );
    }
}

export default EmploymentContent;