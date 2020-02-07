import React from 'react';
import '../css/index.css';
import LandingPage from '../components/LandingPage';
import IntroPage from '../components/IntroPage';
import EmploymentPage from '../components/EmploymentPage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';

export default () => (
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Chivo|Proza+Libre|Nunito|Cardo|Roboto|Duru+Sans|Francois+One|Merienda+One|Volkhov|Noto+Sans|Kaushan+Script&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </head>
    <body>
        <LandingPage/>
        <IntroPage/>
        <EmploymentPage/>
        <ProjectsPage/>
        <EducationPage/>
    </body>
</html>
);

