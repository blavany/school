import React from 'react';
import { Menu, X, Phone, Star, Heart, Sun, MapPin, Book, Users, Image, Mail, Newspaper } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './images/logo/B4 School Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const navItems = [
    { name: 'Home', href: '/', hover: 'hover:text-red-700', icon: <Heart className="w-4 h-4" /> },
    { name: 'About', href: '/about', hover: 'hover:text-orange-700', icon: <Star className="w-4 h-4" /> },
    { name: 'Activities', href: '/activities', hover: 'hover:text-pink-700', icon: <Sun className="w-4 h-4" /> },
    { name: 'Locations', href: '/locations', hover: 'hover:text-purple-700', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Shop', href: '/shop', hover: 'hover:text-yellow-700', icon: <Users className="w-4 h-4" /> },
    { name: 'News', href: '/news', hover: 'hover:text-blue-700', icon: <Newspaper className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', hover: 'hover:text-indigo-700', icon: <Mail className="w-4 h-4" /> },
  ];

  // Decorative elements positions
  const decorativeElements = [
    { element: <Star className="w-6 h-6 text-yellow-400" />, position: "left-28 top-2", delay: 0 },
    { element: <Star className="w-5 h-5 text-yellow-300" />, position: "left-40 top-4", delay: 0.2 },
    { element: <Heart className="w-6 h-6 text-pink-400" />, position: "right-32 top-4", delay: 0.4 },
    { element: <Star className="w-4 h-4 text-yellow-500" />, position: "right-40 top-2", delay: 0.6 },
    { element: <Star className="w-5 h-5 text-yellow-400" />, position: "left-52 top-3", delay: 0.8 },
    { element: <Star className="w-4 h-4 text-yellow-300" />, position: "right-48 top-5", delay: 1 },
    { element: <Star className="w-6 h-6 text-yellow-500" />, position: "left-64 top-4", delay: 1.2 },
    { element: <Star className="w-5 h-5 text-yellow-400" />, position: "right-56 top-3", delay: 1.4 }
  ];

 


  // Floating animation for decorative elements
  const floatingAnimation = {
    animate: (delay: number) => ({
      y: [-10, 10],
      rotate: [0, 360],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay
        },
        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: delay
        }
      }
    })
  };

  // Bouncing animation for logo
  const logoAnimation = {
    scale: [1, 1.1, 1],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  };

  // Navigation item hover animation
  const navItemAnimation = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Phone button animation
  const phoneAnimation = {
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
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
          {/* Animated Logo */}
          <motion.div 
            className="absolute left-4 flex items-center h-full"
            animate={logoAnimation}
          >
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
          </motion.div>

          {/* Decorative Elements */}
          {decorativeElements.map((item, index) => (
  <motion.div
    key={index}
    className={`absolute ${item.position} block`} // Removed "hidden lg:block"
    custom={item.delay}
    animate="animate"
    variants={floatingAnimation}
  >
    {item.element}
  </motion.div>
))}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-32 space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={navItemAnimation}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-2 text-gray-700 font-semibold text-sm transition-all duration-300 relative
                    ${item.hover} hover:scale-105 active:scale-95
                    before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 
                    before:h-0.5 before:rounded-full before:opacity-0 before:transition-all
                    before:duration-300 hover:before:w-full hover:before:opacity-100
                    before:bg-current
                    ${location.pathname === item.href ? 'before:w-full before:opacity-100' : ''}`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Animated Phone Button */}
          <motion.a
            href="tel:+1234567890"
            className="hidden lg:flex items-center absolute right-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg"
            variants={phoneAnimation}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>+1(315)402-1234</span>
          </motion.a>

          {/* Mobile Menu Button and Phone */}
          <div className="lg:hidden flex items-center absolute right-4 space-x-4">
            <motion.a
              href="tel:+1(315)402-1234"
              className="flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-semibold shadow-md"
              variants={phoneAnimation}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-3 h-3 mr-1" />
              <span>Call Us</span>
            </motion.a>
            
            <motion.button
              ref={buttonRef}
              className="p-2 rounded-full hover:bg-gray-100 
                transition-colors duration-200 focus:outline-none focus:ring-2 
                focus:ring-orange-500 focus:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" aria-hidden="true" />
              )}
            </motion.button>
          </div>

          {/* Animated Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={mobileMenuRef}
                className="lg:hidden fixed inset-0 top-20 z-40 bg-white shadow-xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
              >
                <nav className="h-full overflow-y-auto pb-20">
                  <div className="px-4 py-2 space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className={`flex items-center space-x-3 px-4 py-4 rounded-lg text-lg font-medium transition-colors duration-200
                            ${item.hover} hover:bg-gray-50 active:bg-gray-100
                            ${location.pathname === item.href ? 'bg-gray-50' : ''}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header;