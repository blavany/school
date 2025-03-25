import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle click outside
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

  // Handle scroll lock
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

  // Handle escape key
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
        <nav className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0 z-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logo}
              alt="B4School Logo"
              className="h-14 w-auto sm:h-16"
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
                  before:bg-current
                  ${location.pathname === item.href ? 'before:w-full before:opacity-100' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="lg:hidden relative z-10 p-2 rounded-full hover:bg-gray-100 
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
        </nav>

        {/* Mobile Navigation */}
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
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
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

        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300
            ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      </div>
    </header>
  );
};

export default Header;