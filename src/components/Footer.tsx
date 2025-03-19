import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from './images/logo/B4 School Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center justify-left mb-6"> 
              <img
                src={logo}
                alt="B4School Logo"
                className="h-auto max-w-full max-h-32 w-auto" 
              />
            </div>
            <p className="text-gray-400">
              Providing quality early education and childcare services in a nurturing environment.
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
                <Link to="/classes" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Teachers
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Portfolio
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
              <li>28 Princeton Drive Syosset</li>
              <li>New York  USA 11791</li>
              <li>Phone: +1 (315) 402-1234</li>
              <li>contact@b4-school.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
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
          <p>&copy; {new Date().getFullYear()} B4School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
