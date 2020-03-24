import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
               <CardMedia
                  className={classes.resImage}
                  image="Resume2020-1.png"
                  title="My Resume"
               />
               <div className={classes.info}>
               <CardContent className={classes.content}>
                  <Grid container spacing={16}>
                     <Grid item xs={12}>
                        <Typography variant="h3" className={classes.title} color="textSecondary" gutterBottom>
                           Resume
                        </Typography>
                     </Grid>
                     <Grid item xs={12}>
                        <div className={classes.container}>
                           <Typography component="p" className={classes.textContent} color="textPrimary">
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
                           <Typography component="p" className={classes.textContent} color="textPrimary">
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
                           <Typography component="p" className={classes.textContent} color="textPrimary">
                              my resume. Have any questions?
                           </Typography>
                           <Button variant="contained" color="secondary" href="#contained-buttons">
                              contact me
                           </Button>
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
