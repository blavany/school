import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from './images/logo/B4 School Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-3 py-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center justify-left mb-6"> 
              <img
                src={logo}
                alt="B4School Logo"
                className="h-auto max-w-full max-h-36 w-auto" 
              />
            </div>
            <p className="text-gray-400">
            We prepare preschoolers for school.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors duration-200">
                  shops
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors duration-200">
                  News
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>2400 Middle Road Bettendorf IA 52722 </li>
              <li> USA </li>
              <li>Phone: +1 (315) 402-1234</li>
              <li>contact@b4-school.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100065696191087" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
  <Facebook className="h-6 w-6" />
</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
  <p>
    &copy; {new Date().getFullYear()} B4School. All rights reserved by{' '}
    <a 
      href="https://niranthra.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-400 hover:text-white transition-colors duration-200"
    >
      niranthra.com
    </a>
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
