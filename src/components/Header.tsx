import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const scrollProgress = useScrollProgress();

  const isActive = (path: string) => location.pathname === path;

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        className="bg-green-800 text-white py-2 text-sm"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
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
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className="bg-white shadow-lg sticky top-0 z-50"
        style={{ 
          backgroundColor: scrollProgress > 0.1 ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: scrollProgress > 0.1 ? 'blur(10px)' : 'none'
        }}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="flex items-center">
                <motion.div 
                  className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-white font-bold text-xl">JL</span>
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold text-green-800">Jay Line Services</h1>
                  <p className="text-sm text-green-600 italic">Your Partner in Progress</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link 
                    to={item.path}
                    className={`font-medium transition-colors relative ${
                      isActive(item.path) ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden py-4 border-t overflow-hidden"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
              >
                <nav className="flex flex-col space-y-4">
                  {[
                    { path: '/', label: 'Home' },
                    { path: '/about', label: 'About Us' },
                    { path: '/services', label: 'Services' },
                    { path: '/contact', label: 'Contact' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <Link 
                        to={item.path}
                        className={`font-medium transition-colors ${
                          isActive(item.path) ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
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
