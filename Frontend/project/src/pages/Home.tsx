import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Tools from '../components/Tools';
import Reviews from '../components/Reviews';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Tools />
      <Reviews />
    </div>
  );
};

export default Home;