import React from 'react';
import '../css/index.css';
import clsx from 'clsx';
import { Grid, Divider, Card, CardHeader, CardActionArea, CardMedia, CardContent, Typography, Link, Tooltip, Zoom, CardActions, IconButton, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    media: {
        maxHeight: 300,
        maxWidth: 350,
        // height: "auto",
        height: 160,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    actionArea: {
        '&:hover': {
            background: '#E1E1E1',
        }
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    description: {
        padding: theme.spacing(1)
    }
}));

export default function EmploymentCard({ company, link, image, title, location, date, description }) {

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={12}>
            <Card raised="true">
                <Tooltip title="View Company Website" TransitionComponent={Zoom} arrow>
                    <CardActionArea className={classes.actionArea}>
                        <Link href={link} target="_blank">
                            <CardMedia
                            className={classes.media}
                            component="img"
                            alt={company}
                            height="400"
                            image={image}
                            title={company}
                            />
                        </Link>
                    </CardActionArea>
                </Tooltip>
                <CardHeader
                    action={
                        <Tooltip title="View Description" TransitionComponent={Zoom} arrow>
                            <IconButton className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded})}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </Tooltip>
                    }
                    title={title}
                    subheader={<> {date} &ensp; &bull; &ensp; {location} </>}
                />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Divider variant="middle"/>
                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p" className={classes.description}>
                            {description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
}