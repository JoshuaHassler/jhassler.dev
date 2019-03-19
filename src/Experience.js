import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Element } from 'react-scroll';
import styles from './BaseStyle';
import ExperienceListings from './ExperienceListings';

const itemStyle = {
    itemCard: {
        maxWidth: 300,
    },
};

class ExperienceItem extends React.Component {
    state = {
        title: "",
        description: "",
        image: "",
    };
    
    constructor( props ) {
        this.setState({
            title: props.title,
            description: props.description,
            image: props.image
        });
    };

    render() {
        return (
            <Card >
                <CardContent>
                    <Typography>
                        {this.state.title.bind(this)}
                    </Typography>
                </CardContent>
            </Card>
        );
    };
}

const ExperienceCard = withStyles(itemStyle)(ExperienceItem);

class ExperienceList extends React.Component {
    state = {
        experienceCards: [],
    };

    constructor( props ) {
        this.setState({
            experienceCards: props.expCards,
        });
    };
    
    render() {
        return (
            <>
                { this.state.experienceCards.map( card => (
                    <ExperienceCard title={card.title} description={card.description} image={card.image} /> ) ) }
            </>
        );
    }
}

function Experience(props) {
    const { classes } = props;

    return (
        <>
        <Element name="Experience" >
            <Card className={classes.titeCard}>
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
        <ExperienceList expCards={ExperienceListings} />
        </>
    );
}

Experience.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);

