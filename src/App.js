import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import theme from './Theme';
import NavBar from './NavBar';
import HomeCard from './HomeCard';
import AboutCard from './AboutCard';
import Experience from './Experience';
import ContactCard from './ContactCard';
import ResumeCard from './Resume';
import styles from './BaseStyle';

function App(props) {
    const { classes } = props;
    return (
        <MuiThemeProvider theme={theme}>
        <CssBaseline /> 

        <div className="App">
            <NavBar />
            <HomeCard />
            <Grid container className={classes.rootGrid} spacing={16}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={16}>
                        <Grid item key="AboutMe">
                            <AboutCard />
                        </Grid>
                        <Grid item key="Experience">
                            <Experience />
                        </Grid>
                        <Grid item key="Resume">
                            <ResumeCard />
                        </Grid>
                        <Grid item key="Contact">
                            <ContactCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </MuiThemeProvider>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
