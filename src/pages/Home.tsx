import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import TravelCategories from '../components/home/TravelCategories';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <TravelCategories />
      <FeaturedDestinations />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;