import React, {Component} from 'react';
import '../css/index.css';
import { Grid, Card, Avatar, Link, IconButton } from '@material-ui/core';
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
        // border: 1,
        // borderColor: 'text.primary',
        // borderRadius: "50%",
    },
    icon: {
        fill: "rgba(49, 42, 52, 0.845)"
        // fill: "black"
    }
});

const ContactsContent = withStyles(styles)(({ classes }) => {
    return(
        <div className="ContactsContent">
            <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                <Grid item>
                    <Link href="https://www.linkedin.com" target="_blank">
                        <IconButton>
                            <Avatar className={classes.avatar}>
                                <DescriptionIcon className={classes.icon} fontSize="large"/>
                            </Avatar>
                        </IconButton>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="https://www.linkedin.com" target="_blank">
                        <IconButton>
                            <Avatar className={classes.avatar}>
                                <LinkedInIcon className={classes.icon} fontSize="large"/>
                            </Avatar>
                        </IconButton>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="https://www.linkedin.com" target="_blank">
                        <IconButton>
                            <Avatar className={classes.avatar}>
                                <GitHubIcon className={classes.icon} fontSize="large"/>
                            </Avatar>
                        </IconButton>
                    </Link>
                </Grid>

                <Grid item>
                    <Link href="https://www.linkedin.com" target="_blank">
                        <IconButton>
                            <Avatar className={classes.avatar}>
                                <EmailIcon className={classes.icon} fontSize="large"/>
                            </Avatar>
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
});

export default ContactsContent;