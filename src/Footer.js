import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
   constructor(props) {
       super(props)
   };

   render() {
      return (
         <Card>
            <CardContent>
               <IconButton
                  href="https://github.com/JoshuaHassler"
               >
                  <FontAwesomeIcon icon={faGithub} />
               </IconButton>
               <IconButton
                  href="https://gitlab.com/joshuahassler24"
               >
                  <FontAwesomeIcon icon={faGitlab} />
               </IconButton>
               <IconButton
                  href="https://www.linkedin.com/in/joshuahassler/"
               >
                  <FontAwesomeIcon icon={faLinkedin} />
               </IconButton>
               <Typography component="p">
                  Made with ❤️ and tears by Josh
               </Typography>
            </CardContent>
         </Card>
      );
   };
}

Footer.propTypes = {
};

export default Footer;
