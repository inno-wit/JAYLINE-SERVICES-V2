import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">JL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Jay Line Services</h3>
                <p className="text-green-300 text-sm italic">Your Partner in Progress</p>
              </div>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Jay Line Services is a leading provider of comprehensive human resource solutions, 
              manpower services, and financial consultancy in Kenya. We are committed to helping 
              businesses grow through strategic HR partnerships and innovative workforce solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-green-100 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-green-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-green-100 text-sm">
                  <p>Beliani Annex, Ground Floor</p>
                  <p>Along Kangundo Road</p>
                  <p>P.O. Box 5322-00100, Nairobi</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <div className="text-green-100 text-sm">
                  <p>+254 722 311 490</p>
                  <p>+254 734 271 863</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-400 mr-3" />
                <a href="mailto:info@jaylineservice.co.ke" className="text-green-100 hover:text-white transition-colors text-sm">
                  info@jaylineservice.co.ke
                </a>
              </div>
              
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-green-400 mr-3" />
                <a href="http://www.jaylineservice.co.ke" className="text-green-100 hover:text-white transition-colors text-sm">
                  www.jaylineservice.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            &copy; 2024 Jay Line Services. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;