import React from 'react';
import '../css/index.css';
import { Grid, Card, CardHeader, CardActionArea, CardActions, Button, CardMedia, CardContent, Typography, Link, Tooltip, Zoom, IconButton, Collapse, Modal, Backdrop, Fade, Dialog, Slide } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
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
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        // boxShadow: theme.shadows[2],
        maxWidth: "80vh",
        padding: theme.spacing(2, 4, 3)
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
});
  
const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
})) (MuiDialogContent);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectCard = withStyles(styles)(({ classes, link, image, title, description }) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const openGithub = () => {
        window.open(link, '_blank');
    }

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
                <Button size="small" color="primary" onClick={openGithub}> 
                    View in Github
                </Button>
            </CardActions>
            
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}
            TransitionComponent={Transition}>
                {/* <Fade in={open}> */}
                <div className={classes.paper}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt={title}
                            height="300"
                            image={image}
                            title="View Code on Github"
                        />
                    </DialogContent>
                    <DialogContent>
                        <Typography variant="body2" color="textPrimary" component="p">
                            {description}
                        </Typography>
                    </DialogContent>
                </div>
                {/* </Fade> */}
            </Dialog>
        </Grid>
    );
});

export default ProjectCard;