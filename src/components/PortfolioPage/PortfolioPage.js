import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import portfolioItems from './portfolio-items';

import './style.scss';

const PortfolioPage = (props, context) => {

  return (
    <div className="portfolio-page" style={{ backgroundColor: "#feb92a" }}>
      <div className="content-grid">
        <h1>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
            
              .portfolio-item {
                color: #feb92a;
              }
              .portfolio-item a {
                color: #feb92a;
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid #feb92a;

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
