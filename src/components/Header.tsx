import React from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './images/logo/b4logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '/', color: 'text-red-500' },
    { name: 'Classes', href: '/classes', color: 'text-orange-500' },
    { name: 'Teachers', href: '/teachers', color: 'text-yellow-500' },
    { name: 'Portfolio', href: '/portfolio', color: 'text-green-500' },
    { name: 'Contact', href: '/contact', color: 'text-blue-500' },
  ];

  return (
    <header className="fixed w-full bg-blue-100 shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-300" />
              <img
                src={logo}
                alt="B4School Logo"
                className="h-14 w-14"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-600 hover:${item.color} transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-blue-100 p-4 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-gray-600 hover:${item.color} transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
