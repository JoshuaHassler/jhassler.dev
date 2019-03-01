import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    card: {
        maxWidth: 1000,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

class IndexCard extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    title="Some Code"
                />
            </Card>
        );
    }
}

IndexCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexCard);

