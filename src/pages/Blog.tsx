import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of HR: Trends Shaping Workforce Management in 2024",
      excerpt: "Explore the latest trends in human resource management and how they're transforming the way businesses manage their workforce in Kenya and beyond.",
      author: "Sarah Wanjiku",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "HR Trends",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Effective Recruitment Strategies for Kenyan Businesses",
      excerpt: "Learn proven recruitment strategies that help Kenyan businesses attract and retain top talent in today's competitive job market.",
      author: "John Mwangi",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Recruitment",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Payroll Management Best Practices for Small Businesses",
      excerpt: "Discover essential payroll management practices that ensure compliance and efficiency for small and medium enterprises in Kenya.",
      author: "David Kiprotich",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Payroll",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Building a Strong Company Culture in Remote Work Era",
      excerpt: "How to maintain and strengthen company culture while managing remote and hybrid teams in the post-pandemic workplace.",
      author: "Sarah Wanjiku",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Company Culture",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Employee Training and Development: ROI and Best Practices",
      excerpt: "Understanding the return on investment of employee training programs and implementing effective development strategies.",
      author: "John Mwangi",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Training",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Navigating Labor Laws: A Guide for Kenyan Employers",
      excerpt: "Stay compliant with Kenyan labor laws and regulations while protecting your business and employees' rights.",
      author: "David Kiprotich",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Legal Compliance",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = ["All", "HR Trends", "Recruitment", "Payroll", "Company Culture", "Training", "Legal Compliance"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">HR Insights & Resources</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights in human resource management and workforce solutions
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-green-50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                  <span className="text-green-600 ml-3 text-sm">HR Trends</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Future of HR: Trends Shaping Workforce Management in 2024
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Explore the latest trends in human resource management and how they're transforming 
                  the way businesses manage their workforce in Kenya and beyond.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">Sarah Wanjiku</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">March 15, 2024</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>5 min read</span>
                </div>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center">
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div className="lg:h-full">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Featured post" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights and practical advice to help you navigate the world of HR and workforce management
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-green-200 text-green-700 hover:bg-green-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-green-600 text-sm font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <button className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and get the latest HR insights, industry trends, 
            and expert advice delivered directly to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-green-200 text-sm mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;