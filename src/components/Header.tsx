import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+254 722 311 490 / +254 734 271 863</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@jaylineservice.co.ke</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Beliani Annex, Ground Floor, Along Kangundo Road, Nairobi</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">JL</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">Jay Line Services</h1>
                <p className="text-sm text-green-600 italic">Your Partner in Progress</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`font-medium transition-colors ${
                  isActive('/services') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                className={`font-medium transition-colors ${
                  isActive('/blog') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`font-medium transition-colors ${
                    isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`font-medium transition-colors ${
                    isActive('/about') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className={`font-medium transition-colors ${
                    isActive('/services') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/blog" 
                  className={`font-medium transition-colors ${
                    isActive('/blog') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium transition-colors ${
                    isActive('/contact') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
