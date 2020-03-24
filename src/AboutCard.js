import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Element } from 'react-scroll';
import styles from './BaseStyle';

class AboutCard extends React.Component {
    state = {
        inview: false,
    };

    constructor(props) {
        super(props)
    };

    render() {
        const classes = this.props.classes;
        return (
                <Element name="AboutMe" >
                        <Card className={classes.titleCard}>
                            <CardContent>
                                <Typography variant="h3" className={classes.title} color="textSecondary" gutterBottom>
                                    About Me
                                </Typography>
                                <Typography component="p" className={classes.content} color="textPrimary">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor erat nec mi dignissim pulvinar. Nullam porta risus quis elit fermentum imperdiet. Etiam nec pretium justo, eu bibendum arcu. Phasellus eleifend diam sed risus dictum blandit. Cras nec eros faucibus, finibus elit vitae, rhoncus augue. Donec aliquet pulvinar tellus, eu ullamcorper augue ultrices ut. Mauris at tortor sed orci egestas maximus sit amet vel lectus. Nulla convallis sit amet nisi sed interdum.
                                </Typography>
                            </CardContent>
                        </Card>
                </Element>
        );
    };
}

AboutCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutCard);

