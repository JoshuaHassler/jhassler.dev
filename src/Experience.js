import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Element } from 'react-scroll';
import ReactCardFlip from 'react-card-flip';
import styles from './BaseStyle';
import ExperienceListings from './ExperienceListings';

import FlipIcon from '@material-ui/icons/Cached';

const itemStyle = theme => ({
    itemCard: {
        margin: 8,
        float: 'left',
    },
    cardBody: {
        width: 345,
        height: 400,
    },
    cardMedia: {
        height: 140,
    },
    cardAction: {
        height: '100%',
    },
    cardButtonW: {
        margin: 'auto',
    },
    cardButton: {
        position: "relative",
        top: theme.spacing.unit,
        width: theme.typography.display1.fontSize,
        height: theme.typography.display1.fontSize,
    },
});

class ExperienceItem extends React.Component {
    state = {
        title: "",
        description: "",
        image: "",
    };
    
    constructor( props ) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            image: props.image,
            isFlipped: false,
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick( e ) {
        e.preventDefault();
        const currState = this.state.isFlipped;
        this.setState( {
            isFlipped: !currState
        } );
    }

    render() {
        const classes = this.props.classes;
        const desc = this.state.description;
        return (
            <div className={classes.itemCard}>
            <ReactCardFlip isFlipped={this.state.isFlipped}>
            <Card key="front" className={classes.cardBody}>
                <CardActionArea onClick={this.handleClick} className={classes.cardAction}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={this.state.image}
                        title={this.state.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.title}
                        </Typography>
                        <Typography component="p">
                            {desc.substring(0, 230) + "..."}
                        </Typography>
                    </CardContent>
                    <Grid container justify = "center">
                        <CardContent>
                            <Typography gutterBottom variant="h6" color="primary">
                                <FlipIcon className={classes.cardButton} />See More
                            </Typography>
                        </CardContent>
                    </Grid>
                </CardActionArea>
            </Card>

            <Card key="back" className={classes.cardBody}>
                <CardActionArea onClick={this.handleClick} className={classes.cardAction}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.title}
                        </Typography>
                        <Typography component="p">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </ReactCardFlip>
            </div>
        );
    };
}

const ExperienceCard = withStyles(itemStyle)(ExperienceItem);

class ExperienceList extends React.Component {
    state = {
        experienceCards: [],
    };

    constructor( props ) {
        super(props);
        this.state = {
            experienceCards: props.expCards,
        };
    };
    
    render() {
        const classes = this.props.classes;
        return (

            <div className={classes.centerContainer}>
                { this.state.experienceCards.map( card => (
                    <ExperienceCard key={card.id} title={card.title} description={card.description} image={card.image} />
                ) ) }
            </div>
        );
    }
}

const Experiences = withStyles(styles)(ExperienceList);

function Experience(props) {
    const { classes } = props;

    return (
        <>
        <Element name="Experience" >
            <Card className={classes.titleCard}>
                <CardContent>
                    <Typography variant="h3" className={classes.title} color="textSecondary" gutterBottom>
                        Experience
                    </Typography>
                    <Typography component="p" className={classes.content} color="textPrimary">
                        This is some HQ experience
                    </Typography>
                </CardContent>
            </Card>
        </Element>
        <Experiences expCards={ExperienceListings} />
        </>
    );
}

Experience.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);

