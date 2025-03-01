import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Palette } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Palette className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="text-lg font-serif font-bold text-gray-900 dark:text-white">PriyankaArts</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A collection of creativity, showcasing original paintings and sketches by Priyanka.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@priyankaarts.com" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            &copy; {currentYear} PriyankaArts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;