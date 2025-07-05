import React from 'react';
import ImageStack from '../components/ImageStack';
import HeroSection from '../components/HeroSection';
import About from './About';

const Home = () => {
  return (
    <section id="home">
      <div className="content-wrapper">
        <ImageStack side="left" />
        <HeroSection />
        <ImageStack side="right" />
      </div>
    </section>
  );
};

export default Home; 