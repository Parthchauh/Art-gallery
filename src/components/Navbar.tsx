import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Palette, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Palette className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-serif font-bold text-gray-900 dark:text-white">PriyankaArts</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400
                ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400
                ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400
                ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400
                ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`
              }
            >
              Contact
            </NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium
                ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium
                ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`
              }
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium
                ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium
                ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;