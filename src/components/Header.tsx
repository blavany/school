import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './images/logo/B4 School Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

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

  // Animation variants for the kids
  const kidsVariants = {
    animate: {
      x: [0, 10, 0],
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Phone number animation variants
  const phoneBoxVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  };

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        buttonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <nav className="relative flex items-center h-20">
          {/* Logo container with consistent positioning */}
          <div className="absolute left-4 flex items-center h-full">
            <Link 
              to="/" 
              className="flex items-center flex-shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src={logo}
                alt="B4School Logo"
                className="h-14 w-auto sm:h-16"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-32 space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 font-semibold text-lg transition-all duration-300 relative
                  ${item.hover} hover:scale-105 active:scale-95
                  before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 
                  before:h-0.5 before:rounded-full before:opacity-0 before:transition-all
                  before:duration-300 hover:before:w-full hover:before:opacity-100
                  before:bg-current
                  ${location.pathname === item.href ? 'before:w-full before:opacity-100' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone Number Box with Animation */}
          <motion.a
            href="tel:+1234567890"
            className="hidden lg:flex items-center absolute right-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg"
            whileHover="hover"
            whileTap="tap"
            variants={phoneBoxVariants}
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>123-456-7890</span>
            
            {/* Animated Kids */}
           
          </motion.a>

          {/* Mobile Menu Button and Phone Number */}
          <div className="lg:hidden flex items-center absolute right-4 space-x-4">
            <motion.a
              href="tel:+1234567890"
              className="flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-semibold shadow-md"
              whileHover="hover"
              whileTap="tap"
              variants={phoneBoxVariants}
            >
              <Phone className="w-3 h-3 mr-1" />
              <span>Call Us</span>
            </motion.a>
            
            <button
              ref={buttonRef}
              className="p-2 rounded-full hover:bg-gray-100 
                transition-colors duration-200 focus:outline-none focus:ring-2 
                focus:ring-orange-500 focus:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation with larger font */}
          <div
            ref={mobileMenuRef}
            className={`lg:hidden fixed inset-0 top-20 z-40 transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="bg-white h-full shadow-xl">
              <nav className="h-full overflow-y-auto pb-20">
                <div className="px-4 py-2 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-4 rounded-lg text-xl font-medium transition-colors duration-200
                        ${item.hover} hover:bg-gray-50 active:bg-gray-100
                        ${location.pathname === item.href ? 'bg-gray-50' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300
              ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;