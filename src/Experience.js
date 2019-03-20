import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Element } from 'react-scroll';
import ReactCardFlip from 'react-card-flip';
import styles from './BaseStyle';
import ExperienceListings from './ExperienceListings';
import Fuse from 'fuse.js';

import SearchIcon from '@material-ui/icons/Search';
import FlipIcon from '@material-ui/icons/Cached';

const itemStyle = theme => ({
    cardBody: {
        width: 350,
        height: 400,
    },
    cardMedia: {
        height: 140,
    },
    cardAction: {
        height: '100%',
    },
    cardButton: {
        position: "relative",
        top: theme.spacing.unit,
        width: theme.typography.display1.fontSize,
        height: theme.typography.display1.fontSize,
    },
    expContainer: {
        flexGrow: 1,
    },
    search: {
        width: '100%',
    },
    searchInput: {
        '&$cssFocused': {
            color: theme.palette.secondary.light,
        },
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: theme.palette.secondary.light,
         },
    },
    cssFocused: {},
    notchedOutline: {},
});

function FlipButton(props) {
    const {classes} = props;
    return (
        <Grid container justify = "center">
            <CardContent>
                <Typography gutterBottom variant="h6" color="primary">
                    <FlipIcon className={classes.cardButton} />See More
                </Typography>
            </CardContent>
        </Grid>
    );
}

const Flip = withStyles(itemStyle)(FlipButton);

class ExperienceItem extends React.Component {
    state = {
        title: "",
        description: "",
        image: "",
    };
    
    constructor( props ) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            image: props.image,
            isFlipped: false,
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick( e ) {
        e.preventDefault();
        const currState = this.state.isFlipped;
        this.setState( {
            isFlipped: !currState
        } );
    }

    render() {
        const classes = this.props.classes;
        const desc = this.state.description;
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
            <Card key="front" className={classes.cardBody}>
                <CardActionArea onClick={this.handleClick} className={classes.cardAction}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={this.state.image}
                        title={this.state.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.title}
                        </Typography>
                        <Typography component="p">
                            {desc.substring(0, 230) + "..."}
                        </Typography>
                    </CardContent>
                    <Flip />
                </CardActionArea>
            </Card>

            <Card key="back" className={classes.cardBody}>
                <CardActionArea onClick={this.handleClick} className={classes.cardAction}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.title}
                        </Typography>
                        <Typography component="p">
                            {desc}
                        </Typography>
                    </CardContent>
                    <Flip /> 
                </CardActionArea>
            </Card>
            </ReactCardFlip>
        );
    };
}

const ExperienceCard = withStyles(itemStyle)(ExperienceItem);

class ExperienceList extends React.Component {
    state = {
        experienceCards: [],
    };

    constructor( props ) {
        super(props);
        this.state = {
            experienceCards: props.expCards,
        };
    };

    componentWillReceiveProps(nextProps) {
          this.setState({ experienceCards: nextProps.expCards });  
    }

    render() {
        return (
            <>
                { this.state.experienceCards.map( card => (
                    <Grid key={card.id} item>
                        <ExperienceCard
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    </Grid>
                ) ) }
            </>
        );
    }
}

const Experiences = withStyles(itemStyle)(ExperienceList);

class SearchBar extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            cb: this.props.cb,
            searchString: "",
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange( e ) {
        this.setState({
            searchString: e.target.value
        }, this.state.cb( e.target.value ) );
    }

    render() {
        const classes = this.props.classes;
        return (
            <TextField
                id="search"
                label="Search Experience"
                value={this.state.searchString}
                margin="normal"
                variant="outlined"
                className={classes.search}
                onChange={evt => this.handleChange(evt)}
                InputLabelProps={{
                    classes: {
                        root: classes.searchInput,
                        focused: classes.cssFocused,
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                    },
                }}
            />
        );
    }
}

const Search = withStyles(itemStyle)(SearchBar);

class Experience extends React.Component {
    constructor(props) {
        super(props);
        var options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "title",
            ]
        };

        this.state = {
            experienceCards: ExperienceListings,
            fuse: new Fuse(ExperienceListings, options),
        };
    }

    handleSearch = (ss) => {
        var newCards = this.state.fuse.search( ss );
        if( ss === "" ) {
            newCards = ExperienceListings;
        } else if( ss !== "" && newCards === {} ) {
            console.log("No Results")
            newCards = ExperienceListings;
        }
        this.setState({
            experienceCards: newCards,
        });
    }

    render() {
        const classes = this.props.classes;
        console.log( this.state.experienceCards );
        return (
            <div className={classes.expContainer}>
                <Grid container spacing={16} justify="center">
                    <Grid xs={12} key={-1} item>
                        <Element name="Experience" >
                            <Card className={classes.titleCard}>
                                <CardContent>
                                    <Typography
                                        variant="h3"
                                        className={classes.title}
                                        color="textSecondary"
                                        gutterBottom
                                    >
                                        Experience
                                    </Typography>
                                    <Typography
                                        component="p"
                                        className={classes.content}
                                        color="textPrimary"
                                    >
                                        This is some HQ experience
                                    </Typography>
                                    <Search cb={this.handleSearch} />
                                </CardContent>
                            </Card>
                        </Element>
                    </Grid>
                    <Experiences expCards={this.state.experienceCards} />
                </Grid>
            </div>
        );
    }
}

Experience.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);

