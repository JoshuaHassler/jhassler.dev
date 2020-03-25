import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Element, scroller } from 'react-scroll';
import styles from './BaseStyle';

class AboutCard extends React.Component {
    state = {
        inview: false,
    };

    constructor(props) {
        super(props)
    };

    scrollToElement = el => {
        this.setState({
            drawerOpen: false
        }, scroller.scrollTo( el, {
            spy: true,
            smooth: true,
            offset: -100,
            duration: 500,
        }));
    }

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
Hi, I'm Josh! I'm currently a software engineer working at Arista Networks. I work on a compiler as part of the tools team but have a wide variety of experience. Feel free to get to know me better by looking through my <Link onClick={() => this.scrollToElement( "Experience" )}>experience</Link> or by <Link onClick={() => this.scrollToElement( "Contact" )}>contacting me</Link>.
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

