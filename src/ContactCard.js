import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Element } from 'react-scroll';
import styles from './BaseStyle';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

class ContactCard extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        const classes = this.props.classes;
        return (
            <Element name="Contact" >
                <Card className={classes.titleCard}>
                    <CardContent>
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                <Typography variant="h3" className={classes.title} color="textSecondary" gutterBottom>
                                    Contact
                                </Typography>
                                <div className={classes.textContainer} >
                                <Typography component="p" className={classes.content} color="textPrimary">
                                    Feel free to contact me! I am most reachable by email.
                                </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                               <Typography component="p" className={classes.content} color="textPrimary" style={{ textAlign: 'center' }}>
                                   <span className={classes.alignTextWithIcon, classes.textContainer}><EmailIcon/><Link className={classes.contactLinks} href="mailto:joshua@hassler.dev">joshua@hassler.dev</Link></span>
                               </Typography>
                            </Grid>
                            <Grid item xs={6}>
                               <Typography component="p" className={classes.content} color="textPrimary" style={{ textAlign: 'center' }}>
                                   <span className={classes.alignTextWithIcon, classes.textContainer}><VpnKeyIcon/><Link className={classes.contactLinks} href="/jhassler_pgp.asc" download>PGP Key</Link></span>
                               </Typography>
                            </Grid>
                            <Grid item xs={6}>
                               <Typography component="p" className={classes.content} color="textPrimary" style={{ textAlign: 'center' }}>
                                   <span className={classes.alignTextWithIcon, classes.textContainer}><PhoneIcon/>(774) 313 7029</span>
                               </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Element>
        );
    }
}

ContactCard.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactCard);

