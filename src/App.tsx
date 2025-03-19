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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;