import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Footer = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <motion.footer 
      ref={ref}
      className="bg-green-900 text-white"
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div className="md:col-span-2" variants={fadeInUp}>
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.05 }}>
              <motion.div 
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-white font-bold">JL</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Jay Line Services</h3>
                <p className="text-green-300 text-sm italic">Your Partner in Progress</p>
              </div>
            </motion.div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Jay Line Services is a leading provider of comprehensive human resource solutions, 
              manpower services, and financial consultancy in Kenya. We are committed to helping 
              businesses grow through strategic HR partnerships and innovative workforce solutions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-green-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/contact', label: 'Contact Us' }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={link.to} className="text-green-100 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Contact Info</h4>
            <div className="space-y-3">
              <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                <MapPin className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-green-100 text-sm">
                  <p>Beliani Annex, Ground Floor</p>
                  <p>Along Kangundo Road</p>
                  <p>P.O. Box 5322-00100, Nairobi</p>
                </div>
              </motion.div>
              
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <div className="text-green-100 text-sm">
                  <p>+254 722 311 490</p>
                  <p>+254 734 271 863</p>
                </div>
              </motion.div>
              
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <Mail className="w-5 h-5 text-green-400 mr-3" />
                <motion.a 
                  href="mailto:info@jaylineservice.co.ke" 
                  className="text-green-100 hover:text-white transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  info@jaylineservice.co.ke
                </motion.a>
              </motion.div>
              
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <Globe className="w-5 h-5 text-green-400 mr-3" />
                <motion.a 
                  href="http://www.jaylineservice.co.ke" 
                  className="text-green-100 hover:text-white transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  www.jaylineservice.co.ke
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-green-800 mt-8 pt-8 text-center"
          variants={fadeInUp}
        >
          <p className="text-green-200 text-sm">
            &copy; 2024 Jay Line Services. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;