import React from 'react';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import './style.scss';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import portfolioItems from './portfolio-items';
import AboutItems from '../AboutItem/AboutItems';



const AboutPage = (props, context) => {

  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-content">
            <p>
              A CS-minded student that is self-driven, self-learning, and highly-motivated and can perform very efficiently with minimal oversight. Using his scientific and computing background, he can apply the skills necessary to accomplish any technical task at hand in a timely fashion. Experienced in data management and application development and further interested in artificial intelligence, machine learning, and Big Data.
            </p>
          </div>

            
          <AboutItems />

      
     
          </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};


export default AboutPage;
