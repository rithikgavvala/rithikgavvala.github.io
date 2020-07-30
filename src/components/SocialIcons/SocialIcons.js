import React from 'react';
import './style.scss';
import 'font-awesome/css/font-awesome.min.css';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const SocialIcons = (props, context) => {
  const renderGit = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github
    </Tooltip>
  );


  
  return (
    <div className="social-icons animate-icons">
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 200, hide: 400 }}
        overlay={renderGit}
      >
        <a href="https://github.com/rithikgavvala" style={ { color: "#1E1E1E" } }><i className="fa fa-file"></i></a>
      </OverlayTrigger>

        <a href="https://github.com/rithikgavvala" style={ { color: "#1E1E1E" } }><i className="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/rithikg" style={ { color: "#1E1E1E" } }><i className="fa fa-linkedin"></i></a>
 
      </div>
  );
};


export default SocialIcons;