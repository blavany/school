import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Activities from '../components/Activities';
import Services from '../components/Services';
import Facilities from '../components/Facilities';
import Schedule from '../components/Schedule';
import Teachers from '../components/Teachers';
import Blog from '../components/Blog';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Activities />
      <Services />
      <Facilities />
      <Schedule />
      <Teachers />
      <Blog />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;