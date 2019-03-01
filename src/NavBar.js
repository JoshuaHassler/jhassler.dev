import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class NavBar extends React.Component {
    state = {
        anchorEl: null,
        section: "Home",
    };

    setSection = (val, cb) => {
        this.setState({ section: val }, cb);
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = event => {
        console.log( event.currentTarget.textContent );
        var nextSection = ( event.currentTarget.textContent !== '' )?
            event.currentTarget.textContent : this.state.section;
        this.setState({ anchorEl: null, section: nextSection });
    };

    render() {
        const { anchorEl, section } = this.state;
        var sectionHdr = (section === "Home")? "" : ": " + section;

        return (
            <div>
                <AppBar position="static">
                <Toolbar>
                    <IconButton
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        jhassler.dev{ sectionHdr }
                    </Typography>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Home</MenuItem>
                        <MenuItem onClick={this.handleClose}>About Me</MenuItem>
                        <MenuItem onClick={this.handleClose}>Experience</MenuItem>
                        <MenuItem onClick={this.handleClose}>Resume</MenuItem>
                        <MenuItem onClick={this.handleClose}>Contact</MenuItem>
                    </Menu>
                </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default NavBar;
