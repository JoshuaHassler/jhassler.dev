import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './Theme';
import NavBar from './NavBar';
import HomeCard from './HomeCard';
import AboutCard from './AboutCard';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <NavBar />
                <HomeCard />
                <AboutCard />
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
