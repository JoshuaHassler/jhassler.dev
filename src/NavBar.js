import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { scroller } from 'react-scroll';

import MenuIcon from '@material-ui/icons/Menu';
import AccountIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import NoteIcon from '@material-ui/icons/Note';
import EmailIcon from '@material-ui/icons/Email';

const styles = {
    list: {
        width: 250,
    },
};

class NavBar extends React.Component {
    state = {
        drawerOpen: false,
        section: "Home",
    };

    toggleDrawer = open => {
        this.setState({
            drawerOpen: open
        });
    };

    setSection = (val, cb) => {
        this.setState({ section: val }, cb);
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
        const { classes } = this.props;
        const { drawerOpen, section } = this.state;
        var sectionHdr = (section === "Home")? "" : ": " + section;

        const sideBar = (
            <div className={classes.list}>
                <List>
                    <ListItem button key="About" onClick={ () => this.scrollToElement( "AboutMe" ) }>
                        <ListItemIcon><AccountIcon/></ListItemIcon>
                        <ListItemText primary="About Me" />
                    </ListItem>
                    <ListItem button key="Experience" onClick={ () => this.scrollToElement( "Experience" ) }>
                        <ListItemIcon><WorkIcon/></ListItemIcon>
                        <ListItemText primary="Experience" />
                    </ListItem>
                    <ListItem button key="Resume" onClick={ () => this.scrollToElement( "Resume" ) }>
                        <ListItemIcon><NoteIcon/></ListItemIcon>
                        <ListItemText primary="Resume" />
                    </ListItem>
                    <ListItem button key="Contact Me" onClick={ () => this.scrollToElement( "ContactMe" ) }>
                        <ListItemIcon><EmailIcon/></ListItemIcon>
                        <ListItemText primary="Contact Me" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        aria-owns={'side-drawer'}
                        aria-haspopup="true"
                        onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        jhassler.dev{ sectionHdr }
                    </Typography>
                </Toolbar>
                </AppBar>
                <Drawer id='side-drawer' open={drawerOpen} onClose={() => this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                    >
                        {sideBar}
                    </div>
                </Drawer>
            </div>
        );
    }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
