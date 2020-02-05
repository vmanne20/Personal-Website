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
            description: 'I will be working on the Localization team in the Azure Commerce and Ecosystems org.'
        };

        const aws = {
            company: 'Amazon Web Services',
            link: 'https://aws.amazon.com/',
            image: require('../../static/images/aws.png'),
            title: 'Software Development Engineer Intern',
            location: 'Herndon, VA',
            date: 'May 2019 - August 2019',
            description: 'I worked on the Region Management team in the Region Services org. \
            This team is responsible for releasing AWS products and gauging customer demand across all restricted Amazon Cloud regions. \
            I built a website that lets product managers analyze 223 AWS products across 35 cloud regions. \
            I customized cloud infrastructure resources with AWS CloudFormation templates, and used React to build date range filters, product filters, data displays, and dynamic product detail pages. \
            I also used Ruby to save custom-entered product data in DynamoDB. \
            Finally, I deployed the Rails website in a Docker container that is configured with AWS Fargate and ECS (Elastic Container Service).'
        };

        const amazon = {
            company: 'Amazon',
            link: 'https://www.amazon.com/',
            image: require('../../static/images/amazon.png'),
            title: 'Software Development Engineer Intern',
            location: 'Seattle, WA',
            date: 'May 2018 - August 2018',
            description: 'I worked on the Home Innovation Team in the Retail org. \
            I created a Search By Image feature for the Amazon Home website that helps customers find their desired product by uploading their own image and narrowing down the search results. \
            I defined the business logic with Spring, and implemented a coral service and a DAO model to store image features in DynamoDB with Java. \
            I used the Inception v3 neural network to find similar-looking products by comparing the image features. \
            In the end, I displayed over 500 recommendations on the user feed and injected service mocks with the Mockitos framework to test each component.'
        };

        const caci = {
            company: 'CACI',
            link: 'https://www.caci.com/',
            image: require('../../static/images/caci.png'),
            title: 'Software Engineer Intern',
            location: 'Sterling, VA',
            date: 'May 2017 - August 2017',
            description: 'I worked on the A/V services team in BIT Systems, which is a CACI subsidiary. \
            I developed a Python program to retrieve telemetry data from sensors and generate product files containing the data. \
            I also built a PyQt UI to let users generate 10 types of XML telemetry files, and displayed user selections on the UI console with PyQt slots and signals.'
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