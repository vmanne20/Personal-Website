import React from 'react';
import '../css/index.css';
import {Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Link, Tooltip, Zoom} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
        maxHeight: 300,
        maxWidth: 350,
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }
});

export default function EmploymentCard({ company, link, image, title, location, date, description }) {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Card raised="true">
                <Link href={link} target="_blank">
                    <CardActionArea>
                        <Tooltip title="View Company Website" TransitionComponent={Zoom} arrow>
                            <CardMedia
                            className={classes.media}
                            component="img"
                            alt={company}
                            height="400"
                            image={image}
                            title={company}
                            />
                        </Tooltip>
                    </CardActionArea>
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        {title}
                    </Typography>
                    <Typography  gutterBottom variant="subtitle1" component="h6">
                        {location} &ensp; &bull; &ensp; {date} 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}