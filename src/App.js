import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner'
import AboutPage from './components/AboutPage/AboutPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import Footer from './components/Footer/Footer'
import ParallaxBackground from './components/ParallaxBackground/ParallaxBackground';

function App() {
  return (
    <div>
          <ParallaxBackground />
          <Banner/>
          <AboutPage />
          <PortfolioPage />
          <Footer />

    </div>


  );
}

export default App;
