import React, {Component} from 'react';
import '../css/index.css';
import {Grid} from '@material-ui/core';
import ProjectCard from './ProjectCard';

class ProjectsContent extends Component {
    render() {
        
        const personalWebsite = {
            link: 'https://github.com/vmanne20/Personal-Website',
            image: require('../../static/images/vm_website.png'),
            title: 'Personal Website',
            // date: 'Winter 2020',
            description: 'This is the website you are currently looking at. I used React to modularize \
            the website into self-contained components and Gatsby.js to generate static assets quickly.\
            I also utilized Material-UI to customize the card components and grid layout.'
        };

        const mlbPlayerValuePredictor = {
            link: 'https://github.com/vmanne20/MLB-Player-Value-Predictor',
            image: require('../../static/images/juansoto.jpg'),
            title: 'MLB Player Value Predictor',
            // date: 'Winter 2020',
            description: 'I ran an LSTM neural network that uses MLB player stats from 2015-2019 to \
            predict their 2020 WAR (Wins Above Replacement) value. I retrieved the data using the PyBaseball \
            package, and preprocessed & standardized the data with Pandas and Sci-Kit Learn. I also used the \
            Keras library and TensorFlow back-end to implement time series forecasting.'
        };

        const taximize = {
            link: 'https://github.com/vmanne20/Taximize',
            image: require('../../static/images/taxes.jpg'),
            title: 'Taximize',
            // date: 'Winter 2020',
            description: 'I built this project with a team of 6 students for my Software Engineering \
            Capstone class. This is a mobile app that allows employees and small business owners \
            to track personal and business expenses and taxes. We used React Native and Redux \
            to build the components of the profile, and implemented a REST API with Mongoose ORM \
            to categorize expenses and calcualte taxes. We used Node and Express libraries for the back-end.'
        };

        const autoRepairDB = {
            link: 'https://github.com/vmanne20/Auto-Repair-DB',
            image: require('../../static/images/bmw2.jpg'),
            title: 'Auto Repair DB',
            // date: 'Winter 2020',
            description: 'I built a Spring web app that stores and displays data about car repairs \
            and mechanics for my Databases class. I used JPA (Java Persistence API) and Hibernate to \
            map Java POJO objects to entities in the PostgreSQL database. I also implemented a controller \
            with a REST API involving basic CRUD actions to store and display data. \
            The front-end was developed with HTML5 and CSS3.'
        };

        const blabber = {
            link: 'https://github.com/vmanne20/Blabber',
            image: require('../../static/images/blabber.jpg'),
            title: 'Blabber',
            // date: 'Winter 2020',
            description: 'I developed a simple Node + Express web app that lets users post random thoughts \
            or "blabs". I configured a REST API for posting and retrieving blabs from MongoDB. I used Docker \
            Compose to store the source code and dependencies in an image and run it as a container to start \
            the app.'
        };

        const canvasGroupMaker = {
            link: 'https://github.com/vmanne20/Canvas_GroupMaker',
            image: require('../../static/images/canvas.png'),
            title: 'Canvas GroupMaker',
            // date: 'Winter 2020',
            description: 'I developed a feature for Canvas LMS with a team of 5 students for my Intermediate Software Design class. \
            It allows students to form groups on their own based on similar interests and schedules. \
            We used React for the front-end and Ruby to store and retrieve group info from the PostgreSQL database in the back-end. \
            We deployed the app with Heroku on an AWS EC2 instance.'
        };

        const headsUp = {
            link: 'https://github.com/vmanne20/HeadsUp-Hack.UVA',
            image: require('../../static/images/headsup.png'),
            title: 'HeadsUp',
            // date: 'Winter 2020',
            description: 'I developed a mobile app with a team of 4 students for Hack.UVA 2018. \
            It allows users to place pins on a map to alert others about unsafe places to avoid during dangerous situations. \
            We used React Native for the front-end and JavaScript, jQuery, and Firebase for the back-end.'
        };

        const whoOwnsWho = {
            link: 'https://github.com/vmanne20/WhoOwnsWho-DisruptTheDistrict',
            image: require('../../static/images/who.png'),
            title: 'Who Owns Who?',
            // date: 'Winter 2020',
            description: 'I developed a mobile and web app with a team of 3 students for Disrupt the District hackathon in 2018. \
            It provides users with sponsorship information for politicians in all 50 states. \
            This allows users to make better choices for upcoming elections. \
            We used HTML5 and CSS3 for the front-end, and JavaScript for the back-end.'
        };

        const answerIt = {
            link: 'https://github.com/vmanne20/AnswerIt-Website',
            image: require('../../static/images/answerit.png'),
            title: 'AnswerIt',
            // date: 'Winter 2020',
            description: 'I built a simple knowledge market website for the CompSciPrep tutoring center. \
            It lets students post questions about subjects like Math and Science, and get them answered by a team of online tutors. \
            I used HTML5 and CSS3 for the front-end, and JavaScript, jQuery, and PHP for the back-end.'
        };

        return (
            <div className="ProjectsContent">
                <Grid container>
                    <Grid container>
                        <ProjectCard {...personalWebsite}/>
                        <ProjectCard {...mlbPlayerValuePredictor}/>
                        <ProjectCard {...taximize}/>
                    </Grid>
                    <Grid container>
                        <ProjectCard {...autoRepairDB}/>
                        <ProjectCard {...blabber}/>
                        <ProjectCard {...canvasGroupMaker}/>
                    </Grid>
                    <Grid container>
                        <ProjectCard {...headsUp}/>
                        <ProjectCard {...whoOwnsWho}/>
                        <ProjectCard {...answerIt}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ProjectsContent;