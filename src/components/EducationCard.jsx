import React from 'react';
import '../css/index.css';
import {Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Link, Tooltip, Zoom} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = { 
    card: {
        margin: 18,
        // display: "block",
        flexDirection: "column",
        // Justify the content so that CardContent will always be at the top of the card,
        // and CardActions will be at the bottom
        justifyContent: "space-between",
        raised: "true"
    }
};

const EducationCard = withStyles(styles)(({ classes, link, image, school, location, date, description}) => {
    return (
        <Grid item xs component={Card} className={classes.card}>
            <Link href={link} target="_blank">
                <CardActionArea>
                    <Tooltip title="View School Website" TransitionComponent={Zoom} arrow>
                        <CardMedia
                        component="img"
                        alt={school}
                        height="270"
                        image={image}
                        title={school}
                        />
                    </Tooltip>
                </CardActionArea>
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                    {school}
                </Typography>
                <Typography  gutterBottom variant="subtitle1" component="h6">
                    {location} &ensp; &bull; &ensp; {date} 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Grid>
    );
});

export default EducationCard;