import React from 'react';
import Hero from '../components/Hero';
import EventInfo from '../components/EventInfo';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventInfo />
    </div>
  );
};

export default HomePage;