import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './images/logo/B4 School Logo.png';
import { Mail, Phone } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '/', color: 'text-red-1000', hover: 'hover:text-red-700' },
    { name: 'About', href: '/about', color: 'text-orange-1000', hover: 'hover:text-orange-700' },
    { name: 'Activities', href: '/activities', color: 'text-pink-1000', hover: 'hover:text-pink-700' },
    { name: 'Locations', href: '/locations', color: 'text-purple-1000', hover: 'hover:text-purple-700' },
    { name: 'Shop', href: '/shops', color: 'text-brown-1000', hover: 'hover:text-purple-700' },

    { name: 'Classes', href: '/classes', color: 'text-green-1000', hover: 'hover:text-green-700' },
    { name: 'Teachers', href: '/teachers', color: 'text-yellow-1000', hover: 'hover:text-yellow-700' },
    { name: 'Portfolio', href: '/portfolio', color: 'text-blue-1000', hover: 'hover:text-blue-700' },
    { name: 'Contact', href: '/contact', color: 'text-indigo-1000', hover: 'hover:text-indigo-700' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="B4School Logo" className="h-auto max-w-full max-h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-gray-700 font-semibold transition-colors duration-300 ${item.hover}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Box */}
        <div className="hidden md:flex items-center bg-transparent border border-gray-200 px--9 py-2 rounded-lg shadow-sm">
   
                      <Phone className="w-4 h-4 text-blue-600 mr-2" />

          <span className="ml-1 text-gray-600">+1(315)402-1234</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-orange-200 p-2 rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-blue-100 p-4 rounded-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block text-gray-700 font-semibold transition-colors duration-300 ${item.hover}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
