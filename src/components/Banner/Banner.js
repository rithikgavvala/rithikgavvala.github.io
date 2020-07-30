import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons'
import ScrollToNext from '../ScrollToNext/ScrollToNext';
import './style.scss';


function Banner() {
  return (
      <div style={{ backgroundColor: "#feb92a" }} className="banner">
            <main>
                <div className="intro-wrapper">
                    <div class="intro-name">Hello, I'm Rithik!</div>
                    <div class="tagline">Full-Stack Dev | ML Enthusiast</div>
                    <SocialIcons />

                </div>

 
            </main>
            <ScrollToNext pageSelector=".about-page"/>
      </div>

  );
}

export default Banner;
