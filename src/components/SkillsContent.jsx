
import React, {Component} from 'react';
import '../css/index.css';
import {Grid} from '@material-ui/core';
import SkillsCard from './SkillsCard';

class SkillsContent extends Component {
    render() {
        const languages = {
            name: 'Languages',
            tabs: [{
                name: 'Advanced', 
                items: ['Java', 'Python', 'HTML']
            }, 
            {
                name: 'Intermediate',
                items: ['JavaScript', 'C', 'SQL']
            }, 
            {
                name: 'Basic',
                items: ['Ruby', 'C#', 'Bash']
            }]
        };

        const tech = {
            name: 'Technologies',
            tabs: [{
                name: 'Web', 
                items: ['Spring', 'Rails']
            }, 
            {
                name: 'JavaScript',
                items: ['React', 'Node', 'Express', 'jQuery']
            },
            {
                name: 'Python',
                items: ['Pandas', 'SciKit-Learn', 'NumPy', 'Keras', 'PyBaseball']
            }, 
            {
                name: 'AWS',
                items: ['DynamoDB', 'S3', 'ECS', 'Fargate', 'CloudFormation', 'Route53']
            },
            {
                name: 'Other',
                items: ['Git', 'Docker']
            }]
        };

        return(
            <div className="SkillsContent">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <SkillsCard {...languages}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SkillsCard {...tech}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SkillsContent;