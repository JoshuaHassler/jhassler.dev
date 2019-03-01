import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 950,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function AboutCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h7" className={classes.title} color="textSecondary" gutterBottom>
                    About Me
                </Typography>
                <Typography component="p">
                    Site Currently Under Construction
                </Typography>
            </CardContent>
        </Card>
    );
}

AboutCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutCard);

