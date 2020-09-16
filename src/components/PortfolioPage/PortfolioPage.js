import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import portfolioItems from './portfolio-items';

import './style.scss';

const PortfolioPage = (props, context) => {

  return (
    <div className="portfolio-page" style={{ backgroundColor: "#F9A825" }}>
      <div className="content-grid">
        <h1 style={{color:'#263238' }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
            
              .portfolio-item {
                color: #F9A825;
              }
              .portfolio-item a {
                color: #F9A825;
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid #F9A825;

              }
            `}
          </style>
          {/* <PortfolioItem /> */}
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      {/* <ScrollToPrevious pageSelector=".about-page" /> */}
    </div>
  );
};

PortfolioPage.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioPage;
