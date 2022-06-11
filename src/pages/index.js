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

// const componentNames = ["Home", "Introduction", "Employment", "Projects", "Education", "Skills", "Contacts"];

// export default () => (
export default function PersonalWebsite() {
    return(
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Chivo|Proza+Libre|Nunito|Cardo|Roboto|Duru+Sans|Francois+One|Merienda+One|Volkhov|Noto+Sans|Kaushan+Script&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </head>
            <body>
                {/* <NavBar compNames={componentNames}/> */}
                <NavBar tabsInScroll={[
                    {
                        text: "Home",
                        component: <LandingPage name="Home"/>
                    },
                    // {
                    //     text: "Introduction",
                    //     component: <IntroPage name="Introduction"/>
                    // },
                    {
                        text: "Employment",
                        component: <EmploymentPage name="Employment"/>
                    },
                    {
                        text: "Projects",
                        component: <ProjectsPage name="Projects"/>
                    },
                    {
                        text: "Education",
                        component: <EducationPage name="Education"/>
                    },
                    {
                        text: "Skills",
                        component: <SkillsPage name="Skills"/>
                    },
                    {
                        text: "Contacts",
                        component: <ContactsPage name="Contacts"/>
                    }
                ]} />
                {/* <LandingPage name={componentNames[0]}/>
                <IntroPage name={componentNames[1]}/>
                <EmploymentPage name={componentNames[2]}/>
                <ProjectsPage name={componentNames[3]}/>
                <EducationPage name={componentNames[4]}/>
                <SkillsPage name={componentNames[5]}/>
                <ContactsPage name={componentNames[6]}/> */}
            </body>
        </html>
    );
}