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
            description: ['This is the website you are currently looking at. I used ', <b>React</b> , ' to modularize \
            the website into self-contained components and ', <b>Gatsby.js</b> , ' to generate static assets quickly.\
            I also utilized ', <b>Material-UI</b>, ' to customize the card components and grid layout.']
        };

        const mlbPlayerValuePredictor = {
            link: 'https://github.com/vmanne20/MLB-Player-Value-Predictor/blob/master/ManneKanuri_FinalProject.ipynb',
            image: require('../../static/images/juansoto.jpg'),
            title: 'MLB Player Value Predictor',
            // date: 'Winter 2020',
            description: ['I ran an ', <b>LSTM neural network</b>, ' that uses MLB player stats from 2015-2019 to \
            predict their 2020 WAR (Wins Above Replacement) value. I retrieved the data using the ', <b>PyBaseball</b>, ' \
            package, and preprocessed & standardized the data with ', <b>Pandas</b>, ' and ', <b>Sci-Kit Learn</b>, '. \
            I also used the ', <b>Keras</b>, ' library and ', <b>TensorFlow</b> , ' back-end to implement time series forecasting.']
        };

        const taximize = {
            link: 'https://github.com/vmanne20/Taximize',
            image: require('../../static/images/taxes.jpg'),
            title: 'Taximize',
            // date: 'Winter 2020',
            description: ['I built this project with a team of 6 students for my Software Engineering \
            Capstone class. This is a mobile app that allows employees and small business owners \
            to track personal and business expenses and taxes. We used ', <b>React Native</b>, ' and ', <b>Redux</b>, '\
            to build the components of the profile, and implemented a REST API with ', <b>Mongoose</b>, ' ORM \
            to categorize expenses and calculate taxes. We used ', <b>Node</b>, ' and ', <b>Express</b>, ' libraries for the back-end.']
        };

        const autoRepairDB = {
            link: 'https://github.com/vmanne20/Auto-Repair-DB',
            image: require('../../static/images/bmw2.jpg'),
            title: 'Auto Repair DB',
            // date: 'Winter 2020',
            description: ['I built a ', <b>Spring</b>, ' web app that stores and displays data about car repairs \
            and mechanics for my Databases class. I used ', <b>JPA (Java Persistence API)</b>, ' and ', <b>Hibernate</b>, ' to \
            map Java POJO objects to entities in the ', <b>PostgreSQL</b>, ' database. I also implemented a controller \
            with a REST API involving basic CRUD actions to store and display data. \
            The front-end was developed with ', <b>HTML5</b>, ' and ', <b>CSS3</b>, '.']
        };

        const blabber = {
            link: 'https://github.com/vmanne20/Blabber',
            image: require('../../static/images/blabber.jpg'),
            title: 'Blabber',
            // date: 'Winter 2020',
            description: ['I developed a simple ', <b>Node + Express</b>, ' web app that lets users post random thoughts \
            or "blabs". I configured a REST API for posting and retrieving blabs from ', <b>MongoDB</b>, '. I used ', <b>Docker Compose</b>, ' \
            to store the source code and dependencies in an image and run it as a container to start \
            the app.']
        };

        const canvasGroupMaker = {
            link: 'https://github.com/vmanne20/Canvas_GroupMaker',
            image: require('../../static/images/canvas.png'),
            title: 'Canvas GroupMaker',
            // date: 'Winter 2020',
            description: ['I developed a feature for Canvas LMS with a team of 5 students for my Intermediate Software Design class. \
            It allows students to form groups on their own based on similar interests and schedules. \
            We used React for the front-end and ', <b>Ruby</b>, ' to store and retrieve group info from the ', <b>PostgreSQL</b>, ' database in the back-end. \
            We deployed the app with ', <b>Heroku</b>, ' on an ', <b>AWS EC2</b>, ' instance.']
        };

        const headsUp = {
            link: 'https://github.com/vmanne20/HeadsUp-Hack.UVA',
            image: require('../../static/images/headsup.png'),
            title: 'HeadsUp',
            // date: 'Winter 2020',
            description: ['I developed a mobile app with a team of 4 students for Hack.UVA 2018. \
            It allows users to place pins on a map to alert others about unsafe places to avoid during dangerous situations. \
            We used ', <b>React Native</b>, ' for the front-end and ', <b>JavaScript</b> ,', ', <b>jQuery</b>, ', and ', <b>Firebase</b>, ' for the back-end.']
        };

        const whoOwnsWho = {
            link: 'https://github.com/vmanne20/WhoOwnsWho-DisruptTheDistrict',
            image: require('../../static/images/who.png'),
            title: 'Who Owns Who?',
            // date: 'Winter 2020',
            description: ['I developed a mobile and web app with a team of 3 students for Disrupt the District hackathon in 2018. \
            It provides users with sponsorship information for politicians in all 50 states. \
            This allows users to make better choices for upcoming elections. \
            We used ', <b>HTML5</b>, ' and ', <b>CSS3</b>, ' for the front-end, and ', <b>JavaScript</b>, ' for the back-end.']
        };

        const answerIt = {
            link: 'https://github.com/vmanne20/AnswerIt-Website',
            image: require('../../static/images/answerit.png'),
            title: 'AnswerIt',
            // date: 'Winter 2020',
            description: ['I built a simple knowledge market website for the CompSciPrep tutoring center. \
            It lets students post questions about subjects like Math and Science, and get them answered by a team of online tutors. \
            I used ', <b>HTML5</b>, ' and ', <b>CSS3</b>, ' for the front-end, and ', <b>JavaScript</b>, ', ', <b>jQuery</b>, ', and ', <b>PHP</b>, ' for the back-end.']
        };

        return (
            <div className="ProjectsContent">
                {/* column values indicate how many columns in the 12-col layout the container should take up when the viewport hits that breakpoint */}
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/*  */}
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...personalWebsite}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...mlbPlayerValuePredictor}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...taximize}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...autoRepairDB}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...blabber}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...canvasGroupMaker}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...headsUp}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...whoOwnsWho}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectCard {...answerIt}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ProjectsContent;