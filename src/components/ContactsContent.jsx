import React from 'react';
import '../css/index.css';
import { Grid, Avatar, Link, IconButton, Tooltip, Zoom } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    card: {
        margin: 18,
        // display: "block",
        flexDirection: "column",
        justifyContent: "space-between",
        raised: "true"
    },
    avatar: {
        height: 70,
        width: 70,
        backgroundColor: "white",
        overflow: "hidden",
        transition: "transform .3s ease",
        '&:hover': {
            filter: "brightness(50%)",
            transform: "scale(1.15)"
        }
    },
    icon: {
        // fill: "black",
        fill: "rgba(43, 41, 62, 0.845)"
    }
});

const ContactsContent = withStyles(styles)(({ classes }) => {
    return(
        <div className="ContactsContent">
            <Grid container spacing={0} direction="row" justify="center" alignItems="center">
                <Grid item>
                    <Link href="https://www.linkedin.com" target="_blank">
                        <IconButton>
                            <Tooltip title="View Resume" TransitionComponent={Zoom} arrow>
                                <Avatar className={classes.avatar}>
                                    <DescriptionIcon className={classes.icon} fontSize="large"/>
                                </Avatar>
                            </Tooltip>
                        </IconButton>
                    </Link>   
                </Grid>

                <Grid item>
                    <Link href="https://www.linkedin.com/in/vamsimanne6" target="_blank">
                        <IconButton>
                            <Tooltip title="View LinkedIn Profile" TransitionComponent={Zoom} arrow>
                                <Avatar className={classes.avatar}>
                                    <LinkedInIcon className={classes.icon} fontSize="large"/>
                                </Avatar>
                            </Tooltip>
                        </IconButton>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="https://www.github.com/vmanne20" target="_blank">
                        <IconButton>
                            <Tooltip title="View Github Profile" TransitionComponent={Zoom} arrow>
                                <Avatar className={classes.avatar}>
                                    <GitHubIcon className={classes.icon} fontSize="large"/>
                                </Avatar>
                            </Tooltip>
                        </IconButton>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href={"mailto:vmanne20@vt.edu"} target="_blank">
                        <IconButton>
                            <Tooltip title="Email: vmanne20@vt.edu" TransitionComponent={Zoom} arrow>
                                <Avatar className={classes.avatar}>
                                    <EmailIcon className={classes.icon} fontSize="large"/>
                                </Avatar>
                            </Tooltip>
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
});

export default ContactsContent;