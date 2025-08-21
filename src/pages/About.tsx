import React from 'react';
import { Users, Award, Target, Clock, CheckCircle, TrendingUp, Shield, Globe } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Jay Line Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Your trusted partner in human resource solutions, manpower services, and business growth for over 15 years
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between talented professionals and growing businesses, 
                Jay Line Services has evolved into Kenya's premier human resource and manpower solutions provider.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our inception, we have been committed to delivering exceptional service quality, 
                building lasting partnerships, and contributing to the economic growth of Kenya through 
                strategic workforce solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we proudly serve over 100 corporate clients across various industries, 
                having successfully placed more than 500 professionals in their dream careers.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">ISO Certified Company</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Licensed HR Consultancy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Member of IHRM Kenya</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Award-Winning Service</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To empower businesses and individuals through innovative human resource solutions, 
                fostering growth, productivity, and success in the Kenyan market.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To be the leading human resource and manpower solutions provider in East Africa, 
                recognized for excellence, innovation, and transformative impact.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Integrity & Transparency
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Excellence in Service Delivery
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Innovation & Adaptability
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Client-Centric Approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Key Strengths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the competitive HR and manpower solutions industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Highly qualified HR professionals with deep industry knowledge and experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wide Network</h3>
              <p className="text-gray-600">
                Extensive network of professionals and corporate partners across Kenya
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tailored Solutions</h3>
              <p className="text-gray-600">
                Customized HR solutions designed to meet specific client needs and objectives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600">
                Fast turnaround times and responsive customer service for urgent requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Jay Line Services to new heights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Mwangi</h3>
              <p className="text-green-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                Over 20 years of experience in HR management and business development across East Africa.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Wanjiku</h3>
              <p className="text-green-600 font-medium mb-4">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Expert in operational excellence and client relationship management with 15+ years experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">David Kiprotich</h3>
              <p className="text-green-600 font-medium mb-4">Director of Business Development</p>
              <p className="text-gray-600 text-sm">
                Strategic business leader with proven track record in market expansion and client acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction Rate</div>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Awards & Recognition</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-green-500 mr-3" />
                  Best HR Consultancy Firm - Kenya Business Awards 2023
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-green-500 mr-3" />
                  Excellence in Service Delivery - IHRM Kenya 2022
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-green-500 mr-3" />
                  Top Employer Brand Partner - Corporate Kenya 2021
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  ISO 9001:2015 Quality Management System
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  Licensed Private Employment Agency
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  Member of Institute of Human Resource Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;