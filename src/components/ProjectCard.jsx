import React from 'react';
import '../css/index.css';
import { Grid, Card, CardHeader, CardActionArea, CardActions, Button, CardMedia, CardContent, Typography, Link, Tooltip, Zoom, IconButton, Collapse, Modal, Backdrop, Fade } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        margin: 18,
        // display: "block",
        flexDirection: "column",
        justifyContent: "space-between",
        raised: "true"
    },
    media: {
        '&:hover': {
            background: '#E1E1E1'
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // width: "50"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        // boxShadow: theme.shadows[2],
        maxWidth: "80vh",
        padding: theme.spacing(2, 4, 3)
    }
});



const ProjectCard = withStyles(styles)(({ classes, link, image, title, description }) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [clicked, setClicked] = React.useState(false);

    React.useEffect(() => {
        if (clicked) {
            window.open(link, "_blank");
        }
    });

    return (
        <Grid item xs component={Card} className={classes.card}>
            <CardActionArea>
                <Tooltip title="Learn More" TransitionComponent={Zoom} arrow>
                    <CardMedia
                    className={classes.media}
                    component="img"
                    alt={title}
                    height="200"
                    image={image}
                    title="View Code on Github"
                    onClick={handleOpen}
                    />
                </Tooltip>     
            </CardActionArea>

            <CardHeader
                titleTypographyProps={{ variant:'h6' }}
                title={title}
            />

             <CardActions>
                <Button size="small" color="primary" onClick={handleOpen}>
                    Learn More
                </Button>
                <Button size="small" color="primary" onClick={() => setClicked(true)}>
                    View in Github
                </Button>
            </CardActions>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Typography gutterBottom variant="h5" component="h5">
                            {title}
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt={title}
                            height="300"
                            image={image}
                            title="View Code on Github"
                        />
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </div>
                </Fade>
            </Modal>
        </Grid>
    );
});

export default ProjectCard;