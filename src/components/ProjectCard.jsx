import React from 'react';
import '../css/index.css';
import {Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Link, Tooltip, Zoom} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = { 
    card: {
        margin: 13,
        // display: "block",
        flexDirection: "column",
        // Justify the content so that CardContent will always be at the top of the card,
        // and CardActions will be at the bottom
        justifyContent: "space-between",
        raised: "true"
    }
};

const ProjectCard = withStyles(styles)(({ classes, link, image, title, description }) => {
    return (
        <Grid item xs component={Card} className={classes.card}>
            <Link href={link} target="_blank">
                <CardActionArea>
                    <Tooltip title="View code on Github" TransitionComponent={Zoom} arrow>
                        <CardMedia
                        className={classes.media}
                        component="img"
                        alt={title}
                        height="200"
                        image={image}
                        title="View Code on Github"
                        />
                    </Tooltip>
                </CardActionArea>
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {description}
                </Typography>
            </CardContent>
        </Grid>
    );
});

export default ProjectCard;