import React from 'react';

import './style.scss';

const Footer = (props, context) => {
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: "black" }}>Made by <a href="https://github.com/rithikgavvala" target="_blank" rel="noopener noreferrer" style={{ color: "#1f2024" }}>Rithik</a> <span role="img" aria-label="heart">❤️</span></div>
      </div>
    </footer>
  );
};


export default Footer;