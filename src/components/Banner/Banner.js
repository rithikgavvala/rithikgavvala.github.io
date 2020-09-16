import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons'
import ScrollToNext from '../ScrollToNext/ScrollToNext';
import './style.scss';
import pic from '../../files/portfolio-pic.png'

function Banner() {
  return (
      <div style={{ backgroundColor: "#263238", color: "#F9A825" }} className="banner">
            <main>
                <div className="intro-wrapper">
                    <img class = "intro-pic" src={pic}  /> 
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
