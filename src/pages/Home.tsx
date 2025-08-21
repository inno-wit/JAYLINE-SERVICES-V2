import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, CheckCircle, TrendingUp, Shield, Target } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-green-600 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted
                <span className="text-green-600 block">HR Partner</span>
                in Kenya
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Jay Line Services provides comprehensive human resource solutions, manpower services, 
                and financial consultancy to help your business thrive in today's competitive market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services" 
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Jay Line Services?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">15+ Years of Experience</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">500+ Successful Placements</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">100+ Corporate Clients</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">24/7 Professional Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive HR and manpower solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HR Services */}
            <div className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HR Solutions</h3>
              <p className="text-gray-600 mb-4">
                Complete human resource management including recruitment, payroll, and consultancy services.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Staff Recruitment & Mass Placement</li>
                <li>• HR Consultancy & Development</li>
                <li>• Professional Employer Organization</li>
              </ul>
              <Link to="/services" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Manpower Services */}
            <div className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manpower Solutions</h3>
              <p className="text-gray-600 mb-4">
                Flexible manpower supply and outsourced labor management for various industries.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Manpower Supply</li>
                <li>• Outsourced Labor Management</li>
                <li>• Executive Search & Head Hunting</li>
              </ul>
              <Link to="/services" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Financial Services */}
            <div className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Solutions</h3>
              <p className="text-gray-600 mb-4">
                Soft financing options and savings solutions to support your business growth.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-6">
                <li>• Soft Financing</li>
                <li>• Savings Programs</li>
                <li>• Salary Survey & Analysis</li>
              </ul>
              <Link to="/services" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Successful Placements</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">Corporate Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Jay Line Services is Your Best Choice
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine years of experience with innovative approaches to deliver exceptional 
                HR and manpower solutions that drive business success.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Excellence</h3>
                    <p className="text-gray-600">Over 15 years of delivering outstanding results for businesses across Kenya.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Partnership</h3>
                    <p className="text-gray-600">We build long-term relationships based on trust, reliability, and mutual success.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
                    <p className="text-gray-600">Quick turnaround times and 24/7 support to meet your urgent business needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-green-100 mb-6">
                Contact us today for a free consultation and discover how we can help 
                your business achieve its goals.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/contact" 
                  className="block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="block border-2 border-green-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;