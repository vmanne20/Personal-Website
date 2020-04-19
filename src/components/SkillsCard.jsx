import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tabs, Tab, Typography, Grid, Card, CardContent, Box, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    card: {
        margin: 18,
        flexDirection: "column",
        justifyContent: "space-between",
        raised: "true"
    }, 
    header: {
        backgroundColor: "lightgray",
    },
    title: {
        color: "black"
    }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && 
        <Grid item>
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="h6">
                    {children}
                </Typography>
            </CardContent>
        </Grid>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function SkillsCard({ name, tabs }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabElements = [];
  let tabPanels = [];
  for (let i = 0; i < tabs.length; i++) {
    const elem = tabs[i];
    tabElements.push(<Tab label={elem.name} {...a11yProps(i)} />);

    let tabContents = [];
    for (let j = 0; j < elem.items.length; j++) {
        const skill = elem.items[j];
        tabContents.push(
            <Typography  gutterBottom variant="subtitle1" component="h6">
                &bull; {skill}
            </Typography>
        )
    }

    tabPanels.push(
        <TabPanel value={value} index={i}>
            {tabContents}
        </TabPanel>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
            {name}
            </Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="relative" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
            {tabElements}
        </Tabs>
      </AppBar>
      {tabPanels}
    </div>
  );
}