import React from 'react';
import { Users, Target, TrendingUp, Search, FileText, GraduationCap, DollarSign, Building, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "Human Resource Solutions",
      icon: Users,
      description: "Comprehensive HR services to manage your workforce effectively",
      services: [
        {
          name: "Staff Recruitment/Mass Recruitment & Placements (Bulk Recruitment)",
          description: "End-to-end recruitment services for single positions to large-scale hiring needs"
        },
        {
          name: "General Human Resource Consultancy & Development",
          description: "Strategic HR consulting to optimize your human capital management"
        },
        {
          name: "Professional Employer Organization",
          description: "Complete HR outsourcing solutions for businesses of all sizes"
        },
        {
          name: "Outsourced Payroll Management",
          description: "Accurate and compliant payroll processing and management services"
        }
      ]
    },
    {
      title: "Manpower & Employment Services",
      icon: Target,
      description: "Flexible workforce solutions tailored to your operational needs",
      services: [
        {
          name: "Manpower Supply",
          description: "Reliable supply of skilled and unskilled workers across various industries"
        },
        {
          name: "Outsourced Manpower/Labor Management/Employment",
          description: "Complete workforce management including supervision and administration"
        },
        {
          name: "Executive Search & Head Hunting Services",
          description: "Specialized recruitment for senior-level and executive positions"
        }
      ]
    },
    {
      title: "Financial & Advisory Services",
      icon: TrendingUp,
      description: "Financial solutions and advisory services to support business growth",
      services: [
        {
          name: "Soft Financing",
          description: "Flexible financing options to support your business expansion and operations"
        },
        {
          name: "Savings",
          description: "Corporate and individual savings programs with competitive returns"
        },
        {
          name: "Salary Survey",
          description: "Comprehensive market salary analysis and benchmarking services"
        }
      ]
    },
    {
      title: "Training & Development",
      icon: GraduationCap,
      description: "Professional development programs to enhance workforce capabilities",
      services: [
        {
          name: "Staff Training & Career Development",
          description: "Customized training programs to enhance employee skills and career growth"
        },
        {
          name: "Career Counseling",
          description: "Professional guidance for career planning and development"
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive human resource and manpower solutions designed to drive your business success
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete HR & Manpower Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From recruitment to training, financing to consulting - we provide end-to-end solutions 
              for all your human resource and business needs
            </p>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-20">
              <div className="bg-green-50 rounded-2xl p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-lg text-gray-600">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through our comprehensive approach and commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600">
                15+ years of experience delivering successful HR and manpower solutions across Kenya
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround times and efficient processes to meet your urgent business needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tailored Solutions</h3>
              <p className="text-gray-600">
                Customized services designed to meet your specific industry and business requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                We understand your needs and develop a customized solution strategy
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">
                Detailed project planning with clear timelines and deliverables
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-600">
                Professional implementation with regular progress updates
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">
                Ongoing support and optimization to ensure continued success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our comprehensive HR and manpower solutions 
            can drive your business success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="tel:+254722311490" 
              className="border-2 border-green-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-500 transition-colors text-center"
            >
              Call Now: +254 722 311 490
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;