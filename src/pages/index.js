import React from 'react';
import '../css/index.css';
import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';
import IntroPage from '../components/IntroPage';
import EmploymentPage from '../components/EmploymentPage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';
import SkillsPage from '../components/SkillsPage';
import ContactsPage from '../components/ContactsPage';

export default () => (
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Chivo|Proza+Libre|Nunito|Cardo|Roboto|Duru+Sans|Francois+One|Merienda+One|Volkhov|Noto+Sans|Kaushan+Script&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </head>
    <body>
        <NavBar/>
        <LandingPage/>
        <IntroPage/>
        <EmploymentPage/>
        <ProjectsPage/>
        <SkillsPage/>
        <EducationPage/>
        <ContactsPage/>
    </body>
</html>
);

