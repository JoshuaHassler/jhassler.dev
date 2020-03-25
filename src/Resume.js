import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';

const styles = theme => ({
   cardRoot:{
      display: 'flex',
   },
   resImage: { 
        //backgroundAttachment: 'fixed',
      backgroundPosition: 'top',
      width: 300,
   },
   info: {
      display: 'flex',
      flexDirection: 'column',
   },
   content: {
      flex: '1 0 auto',
      backgroundImage: "url(Resume2020_blured-1.png)",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
   },
   container: {
      textAlign: 'center',
   },
   textContent: {
      fontSize: 25,
   },
   title: {
      fontSize: 20,
   },
     button: {
    margin: 10,
  },
});

class ResumeCard extends React.Component {
   constructor( props ) {
      super( props );
      this.state = {
         inview: false,
      }
   };

   render() {
      const classes = this.props.classes;

      return(
         <Element name="Resume" >
            <Card className={classes.cardRoot}>
               <div className={classes.info}>
               <CardContent className={classes.content}>
                  <Grid container spacing={16}>
                     <Grid item xs={12}>
                        <Typography variant="h3" className={classes.title} color="primary" gutterBottom>
                           Resume
                        </Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <div className={classes.container}>
                           <Typography component="p" className={classes.textContent} color="primary">
                              You can
                           </Typography>
                        </div>
                     </Grid>
                     <Grid item xs={4}>
                        <div className={classes.container}>
                           <Button
                              variant="contained"
                              color="primary"
                              href="jhassler-resume.pdf"
                           >
                              View
                           </Button>
                        </div>
                     </Grid>
                     <Grid item xs={4}>
                        <div className={classes.container}>
                           <Typography component="p" className={classes.textContent} color="primary">
                              or
                           </Typography>
                        </div>
                     </Grid>
                     <Grid item xs={4}>
                        <div className={classes.container}>
                           <Button variant="contained" color="primary" href="jhassler-resume.pdf" download>
                              Download
                           </Button>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <div className={classes.container}>
                           <Typography component="p" className={classes.textContent} color="primary">
                              my resume. Have any questions?
                           </Typography>
                           <Link
                               to="Contact"
                               spy={true}
                               smooth={true}
                               offset={-100}
                               duration={500}
                           >
                           <Button variant="contained" color="secondary" href="#contained-buttons">
                              contact me
                           </Button>
                           </Link>
                        </div>
                     </Grid>
                  </Grid>
               </CardContent>
               </div>
            </Card>
         </Element>
      );
   }
}

ResumeCard.propType = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeCard);
