'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm shadow-md z-50 border-b border-amber-600/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-serif font-bold text-amber-600">Gemstone Palace</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-[#c4a484] transition-colors">Home</Link>
              <Link href="/products" className="text-white hover:text-[#c4a484] transition-colors">Products</Link>
              <Link href="/blog" className="text-white hover:text-[#c4a484] transition-colors">Blog</Link>
              <Link href="/contact" className="text-white hover:text-[#c4a484] transition-colors">Contact</Link>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-button hover:bg-amber-700 cursor-pointer whitespace-nowrap">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-64 md:h-96">
        <div className="absolute inset-0">
          <img
            src="https://public.readdy.ai/ai/img_res/c6530bddabd4d559f196ab3a9a3e5393.jpg"
            className="w-full h-full object-cover"
            alt="Contact Us"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl">We're here to assist you with any questions about our exquisite gemstone collection.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-white">Get in Touch</h2>
            
            {formSubmitted ? (
              <div className="bg-green-800 text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone (Optional)"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white rounded-lg focus:outline-none focus:border-amber-500"
                >
                  <option value="">Select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Custom Order">Custom Order</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="Appointment">Appointment Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-white rounded-lg focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded-button hover:bg-amber-700 cursor-pointer whitespace-nowrap"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-white">Contact Information</h2>
            
            <div className="bg-neutral-800 rounded-lg p-8 mb-8">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">Visit Our Showroom</h3>
                  <p className="text-gray-300">
                    123 Gem Street, Asansol<br />
                    West Bengal, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-phone text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">Call Us</h3>
                  <p className="text-gray-300">
                    +91 123 456 7890<br />
                    +91 987 654 3210
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-envelope text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">Email Us</h3>
                  <p className="text-gray-300">
                    info@gemstonepalace.com<br />
                    sales@gemstonepalace.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-clock text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">Business Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 10:00 AM - 7:00 PM<br />
                    Saturday: 10:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-neutral-800 rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Our Location</h3>
              <div className="relative h-64 bg-neutral-700 rounded-lg overflow-hidden">
                {/* This is a placeholder for a map. In a real implementation, you would integrate Google Maps or another map service */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">Map Loading...</p>
                </div>
                <img 
                  src="https://public.readdy.ai/ai/img_res/c6530bddabd4d559f196ab3a9a3e5393.jpg" 
                  alt="Location Map" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="mt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 font-semibold cursor-pointer whitespace-nowrap"
                >
                  Get Directions <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-serif text-center mb-16 text-white">Frequently Asked Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-white">Do you offer international shipping?</h3>
            <p className="text-gray-300">Yes, we offer secure international shipping to most countries worldwide. Shipping costs and delivery times vary depending on your location.</p>
          </div>
          
          <div className="bg-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-white">Are your gemstones certified?</h3>
            <p className="text-gray-300">All our gemstones come with internationally recognized certification verifying their authenticity, origin, and quality.</p>
          </div>
          
          <div className="bg-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-white">Can I request a custom design?</h3>
            <p className="text-gray-300">Absolutely! We offer bespoke design services. Contact our team with your requirements, and our expert designers will work with you to create your perfect piece.</p>
          </div>
          
          <div className="bg-neutral-800 rounded-lg p-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-white">What is your return policy?</h3>
            <p className="text-gray-300">We offer a 30-day return policy for most items. Custom pieces may have different terms. Please contact our customer service for specific details.</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Gemstone Palace</h3>
              <p className="text-gray-400">Crafting memories with the world's finest gemstones since 1985.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white cursor-pointer">Home</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white cursor-pointer">Products</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white cursor-pointer">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white cursor-pointer">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Gem Street, Asansol</li>
                <li>West Bengal, India</li>
                <li>Phone: +91 123 456 7890</li>
                <li>Email: info@gemstonepalace.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
                />
                <button className="bg-amber-600 px-4 py-2 rounded-r-lg hover:bg-amber-700 cursor-pointer whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gemstone Palace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
