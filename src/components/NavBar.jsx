import React, {Component} from 'react';
import '../css/index.css';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Typography, Box, Toolbar, Container, useScrollTrigger, Fab, Zoom } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Scrollspy from 'react-scrollspy'
import inView from 'in-view'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 0,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        bottom: theme.spacing(2),
        right: theme.spacing(2),
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
        backgroundColor: "#1976d2"
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


// const handleView = (item) => {
//     var tabElem = document.querySelector(`#nav-${item}`);
//     console.log("Tab: " + item);
    
//     let offsetHeight = 0.6*(window.innerHeight);
//     inView.offset({ bottom: offsetHeight });
    
//     inView(`#${item}`)
//     .on("enter", () => tabElem.classList.add('is-active'))
//     .on("exit", el  => tabElem.classList.remove('is-active'));
// };

// // Apply method on each DOM element 
// ['Home', 'Introduction', 'Employment', 'Projects', 'Education', 'Skills', 'Contacts'].forEach(handleView);

const NavTab = withStyles((theme) => ({
    root: {
        height: 60,
        backgroundColor: "#1976d2",
        // fontWeight: theme.typography.fontWeightRegular,
        // color: "#f5f5f5",
        // color: "black",

        '&:hover': {
            color: 'white',
            backgroundColor: "#115293"
            // backgroundColor: "green"
        },
        // '&:focus': {
        //     color: 'white',
        //     fontWeight: theme.typography.fontWeightBold,
        // },
    },
    selected: {
        color: 'white',
        backgroundColor: "#115293",
        fontWeight: theme.typography.fontWeightBold,
    }

})) ((props) =>
    <Tab
        component="a"
        onClick={(event) => {
            event.preventDefault();
        }}
        {...props}
    />
);

function setProps(tabName) {
    return {
      id: `nav-${tabName}`,
      'aria-controls': `nav-tabpanel-${tabName}`,
      label: tabName,
      value: tabName,
      href: `#${tabName}`
    };
}

export default function NavBar() {
    const classes = useStyles();

    const [selectedTab, setValue] = React.useState("Home");

    const handleChange = (event, newSelectedTab) => {
        if (selectedTab !== newSelectedTab) {
            setValue(newSelectedTab);
            document.getElementById(`nav-${newSelectedTab}`).className = classes.selected;
        }
        var selectedComponent = document.getElementById(newSelectedTab);
        selectedComponent.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
        });
    };

    return (
        <div className={classes.root}>
            {/* <React.Fragment> */}
                <Scrollspy items={ ['Home', 'Introduction', 'Employment', 'Projects', 'Education', 'Skills', 'Contacts'] } currentClassName="is-active"/>

                <AppBar position="fixed" boxShadow={3}>
                    <NavTabs centered={true} value={selectedTab} onChange={handleChange} aria-label="navigation">

                            <NavTab {...setProps("Home")}/>
                            <NavTab {...setProps("Introduction")}/>
                            <NavTab {...setProps("Employment")}/>
                            <NavTab {...setProps("Projects")}/>
                            <NavTab {...setProps("Education")}/>
                            <NavTab {...setProps("Skills")}/>
                            <NavTab {...setProps("Contacts")}/>
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
}