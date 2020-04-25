import React, {Component} from 'react';
import '../css/index.css';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Typography, Box, Toolbar, Container, useScrollTrigger, Fab, Zoom } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

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
        height: 60,
        backgroundColor: "#1976d2"
    }
}));

// function NavTab(props) {
//     return (
//       <Tab
//         component="a"
//         onClick={(event) => {
//           event.preventDefault();
//         }}
//         {...props}
//       />
//     );
// }

const NavTabs = withStyles({
    root: {
    //   borderTop: '1px solid red',
    //   borderBottom: '5px solid darkblue',
    //   height: 60,
    //   backgroundColor: "#0d47a1"
      // #e8e8e8
    },
    indicator: {
      backgroundColor: 'white',
      height: 4
    },
  })(Tabs);

const NavTab = withStyles((theme) => ({
    root: {
        // fontWeight: theme.typography.fontWeightRegular,
        // color: "#f5f5f5",
        // color: "black",
        '&:hover': {
            color: 'white',
            backgroundColor: "#115293"
        },
        '&$selected': {
            color: '#fafafa',
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: "#115293"
        },
        '&:focus': {
            color: 'white',
            fontWeight: theme.typography.fontWeightBold,
        },
    }
})) ((props) =>
    <Tab
        component="a"
        onClick={(event) => {
            event.preventDefault();
            console.log("Clicked Value: " + props.value);

            document.getElementById(props.value).scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        }}
        {...props}
    />
);

function setProps(tabName) {
    return {
      id: `nav-tab-${tabName}`,
      'aria-controls': `nav-tabpanel-${tabName}`,
      label: tabName,
      value: tabName,
      href: `/${tabName.toLowerCase()}`
    };
}

export default function NavBar() {
    const classes = useStyles();

    const [value, setValue] = React.useState("Home");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            {/* <React.Fragment> */}
                <AppBar position="fixed" boxShadow={3} className={classes.navBar}>
                    <NavTabs centered={true} value={value} onChange={handleChange} aria-label="navigation">
                        <NavTab className={classes.navBar} {...setProps("Home")}/>
                        <NavTab className={classes.navBar} {...setProps("Introduction")}/>
                        <NavTab className={classes.navBar} {...setProps("Employment")}/>
                        <NavTab className={classes.navBar} {...setProps("Projects")}/>
                        <NavTab className={classes.navBar} {...setProps("Education")}/>
                        <NavTab className={classes.navBar} {...setProps("Skills")}/>
                        <NavTab className={classes.navBar} {...setProps("Contacts")}/>
                    </NavTabs>
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