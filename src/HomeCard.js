import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';
import { white } from './pallet';

const styles = theme => ({
    button: {
        width: '200px',
    },
    card: {
        height: '100vh',
        width: '100vw',
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',

        backgroundImage: 'url("./header.jpg")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        border: '2px solid' + white,
        borderRadius: '25px',
        color: white,
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, 50%)',
        zIndex: 2,
        padding: '10px 40px 40px 40px',
        textAlign: 'center',
    },
    spacer: {
        top: '100%',
    },
});

class IndexCard extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.spacer}>
                <Card className={classes.card}>
                </Card>
                <div
                    className={classes.overlay}
                >

                    <h2>Software Engineer</h2>
                    <h1>Joshua Hassler</h1>
                    <Link
                        to="AboutMe"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            About Me
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

IndexCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexCard);

