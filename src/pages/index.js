import React, {Component} from 'react';
import { render } from 'react-dom';
import '../css/index.css';
import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';
import IntroPage from '../components/IntroPage';
import EmploymentPage from '../components/EmploymentPage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';
import SkillsPage from '../components/SkillsPage';
import ContactsPage from '../components/ContactsPage';
import { Element, Events, scroller } from 'react-scroll';

// document.ready(() => {
//     console.log("READY");
// });

export default () => (
// class PersonalWebsite extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     Events.scrollEvent.register('begin', function () {
    //       console.log("begin", arguments);
    //     });
    
    //     Events.scrollEvent.register('end', function () {
    //       console.log("end", arguments);
    //     });
    // }

    <html>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Chivo|Proza+Libre|Nunito|Cardo|Roboto|Duru+Sans|Francois+One|Merienda+One|Volkhov|Noto+Sans|Kaushan+Script&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        </head>
        <body>
            <NavBar/>
            <LandingPage name="Home"/>
            <IntroPage name="Introduction"/>
            <EmploymentPage name="Employment"/>
            <ProjectsPage name="Projects"/>
            <EducationPage name="Education"/>
            <SkillsPage name="Skills"/>
            <ContactsPage name="Contacts"/>
        </body>
    </html>
);