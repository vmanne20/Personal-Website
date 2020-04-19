import React, {Component} from 'react';
import '../css/index.css';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Typography, Box, Toolbar, Container, useScrollTrigger, Fab, Zoom } from '@material-ui/core';
import LandingPage from '../components/LandingPage';
import IntroPage from '../components/IntroPage';
import EmploymentPage from '../components/EmploymentPage';
import ProjectsPage from '../components/ProjectsPage';
import EducationPage from '../components/EducationPage';
import SkillsPage from '../components/SkillsPage';
import ContactsPage from '../components/ContactsPage';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 0,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    navBar: {
        // backgroundColor: "blue",
        // height: 60,
    }
}));

function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
}

export default function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            {/* <React.Fragment> */}
                <AppBar position="fixed" className={classes.navBar}>
                    <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="navigation"
                    >
                    <LinkTab label="Home" href="/drafts" {...a11yProps(0)}/>
                    <LinkTab label="Employment" href="/trash" {...a11yProps(1)}/>
                    <LinkTab label="Projects" href="/spam" {...a11yProps(2)}/>
                    <LinkTab label="Skills" href="/drafts" {...a11yProps(0)}/>
                    <LinkTab label="Education" href="/trash" {...a11yProps(1)}/>
                    <LinkTab label="Contacts" href="/spam" {...a11yProps(2)}/>
                    </Tabs>
                </AppBar>
                {/* <Container>
                    <LandingPage/>
                    <IntroPage/>
                    <EmploymentPage/>
                    <ProjectsPage/>
                    <SkillsPage/>
                    <EducationPage/>
                    <ContactsPage/>
                </Container> */}
            {/* </React.Fragment> */}
        </div>
    );

    // return (
    //     <React.Fragment>
    //         <AppBar position="fixed" className={classes.appBar}>
    //             <Toolbar></Toolbar>
    //         </AppBar>
    //         <Container>
    //             <LandingPage/>
    //             <IntroPage/>
    //             <EmploymentPage/>
    //             <ProjectsPage/>
    //             <SkillsPage/>
    //             <EducationPage/>
    //             <ContactsPage/>
    //         </Container>
    //         <ScrollTop {...props}>
    //             <Fab color="secondary" size="small" aria-label="scroll back to top">
    //                 <KeyboardArrowUpIcon />
    //             </Fab>
    //         </ScrollTop>
    //     </React.Fragment>
    // );
}