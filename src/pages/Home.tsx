import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Activities from '../components/Activities';
import Services from '../components/Services';
import Facilities from '../components/Facilities';
// import Schedule from '../components/Schedule';
import Teachers from '../components/Teachers';
// import Blog from '../components/Blog';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Teachers />
      <Activities />
      <Services />
      <Facilities />
      {/* <Schedule /> */}
      
      {/* <Blog /> */}
      <Gallery />
      <Testimonial/>
      <Footer />
    </div>
  );
};

export default Home;