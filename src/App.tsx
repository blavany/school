import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Teachers from './pages/Teachers';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Activities from './pages/Activities';
import Locations from './pages/Locations';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsappAppButton';
import ScrollTop from './components/ScrollTop';
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/shops" element={<Shop />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />

        </Routes>
       
    
        <ScrollToTop />
        <ScrollTop/>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;