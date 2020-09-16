import React from 'react';
import './style.scss';
import 'font-awesome/css/font-awesome.min.css';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import resume from '../../files/RithikResumeJuly2020-6.pdf'
const SocialIcons = (props, context) => {
  const renderGit = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github
    </Tooltip>
  );


  
  return (
    <div className="social-icons animate-icons">
        <a href={resume} style={ { color: "#F9A825" } }><i className="fa fa-file"></i></a>


        <a href="https://github.com/rithikgavvala" style={ { color: "#F9A825" } }><i className="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/rithikg" style={ { color: "#F9A825" } }><i className="fa fa-linkedin"></i></a>
 
      </div>
  );
};


export default SocialIcons;