import React from 'react';
import '../css/index.css';
import clsx from 'clsx';
import { Button, Grid, Divider, Card, CardHeader, CardActionArea, CardActions, CardMedia, CardContent, 
    Typography, Link, Tooltip, Zoom, IconButton, Dialog, Slide, Collapse } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     media: {
//         maxHeight: 300,
//         maxWidth: 350,
//         // height: "auto",
//         height: 160,
//         display: "block",
//         marginLeft: "auto",
//         marginRight: "auto",
//         zIndex: 3
//     },
//     actionArea: {
//         '&:hover': {
//             background: '#E1E1E1',
//             opacity: 0.7
//         }
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//           duration: theme.transitions.duration.shortest
//         })
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)'
//     },
//     description: {
//         padding: theme.spacing(1)
//     }
// }));

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
            filter: "brightness(60%)"
        }
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
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

const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
      float: "left"
    },
})) (MuiDialogActions);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EmploymentCard = withStyles(styles)(({ classes, company, link, image, title, location, date, description }) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    onClick={handleOpen}
                    />
                </Tooltip>     
            </CardActionArea>

            <CardHeader
                titleTypographyProps={{ variant:'h6' }}
                title={title}
                subheader={<> {date} &ensp; &bull; &ensp; {location} </>}
            />
            
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}
            TransitionComponent={Transition}>
                <div className={classes.paper}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <CardMedia
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
            </Dialog>
        </Grid>
    );
});

export default EmploymentCard;

// export default function EmploymentCard({ company, link, image, title, location, date, description }) {

//     const classes = useStyles();

//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };

//     return (
//         <Grid item xs={12}>
//             <Card raised="true">
//                 <Tooltip title="View Company Website" TransitionComponent={Zoom} arrow>
//                     <CardActionArea className={classes.actionArea}>
//                         <Link href={link} target="_blank">
//                             <CardMedia
//                             className={classes.media}
//                             component="img"
//                             alt={company}
//                             height="400"
//                             image={image}
//                             title={company}
//                             />
//                         </Link>
//                     </CardActionArea>
//                 </Tooltip>
//                 <CardHeader
//                     action={
//                         <Tooltip title="View Description" TransitionComponent={Zoom} arrow>
//                             <IconButton className={clsx(classes.expand, {
//                                 [classes.expandOpen]: expanded})}
//                             onClick={handleExpandClick}
//                             aria-expanded={expanded}
//                             aria-label="show more"
//                             >
//                                 <ExpandMoreIcon />
//                             </IconButton>
//                         </Tooltip>
//                     }
//                     title={title}
//                     subheader={<> {date} &ensp; &bull; &ensp; {location} </>}
//                 />
//                 <Collapse in={expanded} timeout="auto" unmountOnExit>
//                     <Divider variant="middle"/>
//                     <CardContent>
//                         <Typography variant="body2" color="textPrimary" component="p" className={classes.description}>
//                             {description}
//                         </Typography>
//                     </CardContent>
//                 </Collapse>
//             </Card>
//         </Grid>
//     );
// }