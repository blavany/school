import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './images/logo/B4 School Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '/', hover: 'hover:text-red-700' },
    { name: 'About', href: '/about', hover: 'hover:text-orange-700' },
    { name: 'Activities', href: '/activities', hover: 'hover:text-pink-700' },
    { name: 'Locations', href: '/locations', hover: 'hover:text-purple-700' },
    { name: 'Classes', href: '/classes', hover: 'hover:text-green-700' },
    { name: 'Teachers', href: '/teachers', hover: 'hover:text-yellow-700' },
    { name: 'Portfolio', href: '/portfolio', hover: 'hover:text-blue-700' },
    { name: 'Contact', href: '/contact', hover: 'hover:text-indigo-700' },
  ];

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      const button = document.getElementById('mobile-menu-button');
      if (isMenuOpen && nav && !nav.contains(event.target as Node) && !button?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu when window is resized to desktop view
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center justify-between h-20">
    
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0"
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="B4School Logo"
              className="h-14 w-auto sm:h-16 object-contain"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-8 space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 font-semibold text-sm transition-all duration-300 relative
                  ${item.hover} hover:scale-105 active:scale-95
                  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 
                  before:h-0.5 before:rounded-full before:opacity-0 before:transition-all
                  before:duration-300 hover:before:w-full hover:before:opacity-100
                  before:bg-current`}
              >
                {item.name}
              </Link>
            ))}
          </div>

         
          <button
            id="mobile-menu-button"
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </nav>

  
        <div
          id="mobile-nav"
          className={`lg:hidden fixed inset-x-0 top-20 transition-all duration-300 transform
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
            bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto`}
        >
          <nav className="container mx-auto py-4 px-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-3 px-4 rounded-lg text-gray-700 font-semibold transition-all duration-200
                  ${item.hover} hover:bg-gray-50 active:bg-gray-100`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

   
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 lg:hidden"
            aria-hidden="true"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;