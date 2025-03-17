'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import '../app/globals.css';
import Link from 'next/link';

const GemstonePalace: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);
  const salesChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (salesChartRef.current) {
      const chart = echarts.init(salesChartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Sales',
            type: 'line',
            data: [150, 230, 224, 218, 135, 147],
            itemStyle: {
              color: '#D97706'
            }
          }
        ]
      };
      chart.setOption(option);
    }
  }, []);

  const featuredGems = [
    {
      name: 'Royal Blue Sapphire',
      description: 'Exquisite 5.2 carat Ceylon sapphire with exceptional clarity',
      image: 'https://public.readdy.ai/ai/img_res/d1575ce776963cea6bb5a4cd2e5d1161.jpg'
    },
    {
      name: 'Colombian Emerald',
      description: 'Rare 3.8 carat emerald with remarkable transparency',
      image: 'https://public.readdy.ai/ai/img_res/4a0a29e926f6c581090ce590cdf41e67.jpg'
    },
    {
      name: 'Burmese Ruby',
      description: 'Premium 2.5 carat pigeon blood ruby with superior brilliance',
      image: 'https://public.readdy.ai/ai/img_res/de4edd38507566090295f4eb1ab6bb6a.jpg'
    }
  ];

  const blogPosts = [
    {
      title: 'The Fascinating World of Rare Gemstones',
      excerpt: 'Discover the most extraordinary and valuable gems from around the globe...',
      date: 'March 15, 2025',
      image: 'https://public.readdy.ai/ai/img_res/99dc09ae3325d1e4db1cf904abcd35e2.jpg'
    },
    {
      title: 'Investment Guide: Precious Stones',
      excerpt: 'Learn how to make informed decisions when investing in precious gems...',
      date: 'March 14, 2025',
      image: 'https://public.readdy.ai/ai/img_res/4296d151032719dd99e3b20e303b5bd3.jpg'
    },
    {
      title: 'The Art of Gem Cutting',
      excerpt: 'An inside look at the meticulous process of transforming rough stones...',
      date: 'March 13, 2025',
      image: 'https://public.readdy.ai/ai/img_res/710e66928da79b2b0ea7fc99e17f6093.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-black shadow-md z-50 border-b border-amber-600/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-amber-600">Gemstone Palace</h1>
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
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://public.readdy.ai/ai/img_res/78895abaaa3bc9817157f49ab1d3c706.jpg"
            className="w-full h-full object-cover"
            alt="Luxury Gemstone Store"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-6xl font-serif font-bold mb-4">Discover Timeless Beauty</h1>
            <p className="text-xl mb-8 max-w-2xl">Experience the world's finest gemstones, carefully curated for those who appreciate extraordinary beauty and unparalleled quality.</p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded-button hover:bg-amber-700 cursor-pointer whitespace-nowrap">
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16 text-white">Featured Gemstones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredGems.map((gem, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img src={gem.image} alt={gem.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">{gem.name}</h3>
                  <p className="text-gray-400 mb-4">{gem.description}</p>
                  <button className="bg-amber-600 text-white px-6 py-2 rounded-button hover:bg-amber-700 cursor-pointer whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-neutral-800 p-8 rounded-lg">
              <i className="fas fa-gem text-4xl text-amber-500 mb-4"></i>
              <h3 className="text-3xl font-bold mb-2 text-white">5000+</h3>
              <p className="text-gray-300">Premium Gemstones</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-lg">
              <i className="fas fa-users text-4xl text-amber-500 mb-4"></i>
              <h3 className="text-3xl font-bold mb-2 text-white">10000+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-lg">
              <i className="fas fa-globe text-4xl text-amber-500 mb-4"></i>
              <h3 className="text-3xl font-bold mb-2 text-white">25+</h3>
              <p className="text-gray-300">Countries Served</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-lg">
              <i className="fas fa-award text-4xl text-amber-500 mb-4"></i>
              <h3 className="text-3xl font-bold mb-2 text-white">50+</h3>
              <p className="text-gray-300">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Categories */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16 text-white">Our Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-96 group overflow-hidden rounded-lg cursor-pointer">
              <img src="https://public.readdy.ai/ai/img_res/267c30a30371f89b163b793cba0e493e.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Diamond Collection" />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif text-white mb-2">Diamond Collection</h3>
                <p className="text-white opacity-90">Timeless brilliance and elegance</p>
              </div>
            </div>
            <div className="relative h-96 group overflow-hidden rounded-lg cursor-pointer">
              <img src="https://public.readdy.ai/ai/img_res/b0fa4cd2f81d1496d4d949c97d3b4582.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Colored Gems" />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif text-white mb-2">Colored Gems</h3>
                <p className="text-white opacity-90">Vibrant and rare treasures</p>
              </div>
            </div>
            <div className="relative h-96 group overflow-hidden rounded-lg cursor-pointer">
              <img src="https://public.readdy.ai/ai/img_res/c0e3b1610b5e2d35ae069c381d180b62.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Pearl Collection" />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif text-white mb-2">Pearl Collection</h3>
                <p className="text-white opacity-90">Ocean's finest treasures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16 text-white">Client Testimonials</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="mb-12"
          >
            <SwiperSlide>
              <div className="text-center px-8 md:px-20">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/53f5a1e03de94360902d4527eb963b99.jpg"
                    className="w-full h-full object-cover" alt="Client" />
                </div>
                <p className="text-xl text-gray-300 mb-6">"The quality and craftsmanship of their gemstones are unparalleled. I've been a loyal customer for over a decade and have never been disappointed."</p>
                <h4 className="font-serif font-bold text-white">Victoria Richardson</h4>
                <p className="text-gray-400">Art Collector</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center px-8 md:px-20">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <img src="https://public.readdy.ai/ai/img_res/aa254f2c2d831c7a57483c76484cb063.jpg"
                    className="w-full h-full object-cover" alt="Client" />
                </div>
                <p className="text-xl text-gray-300 mb-6">"Their expertise in rare gemstones is exceptional. The team's knowledge and personalized service made my purchase experience truly memorable."</p>
                <h4 className="font-serif font-bold text-white">Alexander Thompson</h4>
                <p className="text-gray-400">Investment Banker</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16 text-white">Latest from Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <button className="text-amber-500 hover:text-amber-400 font-semibold cursor-pointer whitespace-nowrap">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16 text-white">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center">
                <i className="fas fa-certificate text-2xl text-amber-500"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Certification</h3>
              <p className="text-gray-300">International gemological certification for every stone</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center">
                <i className="fas fa-tools text-2xl text-amber-500"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Custom Design</h3>
              <p className="text-gray-300">Bespoke jewelry creation and modification services</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center">
                <i className="fas fa-shield-alt text-2xl text-amber-500"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Insurance</h3>
              <p className="text-gray-300">Comprehensive insurance coverage for your valuables</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center">
                <i className="fas fa-sync text-2xl text-amber-500"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Trade-In</h3>
              <p className="text-gray-300">Flexible trade-in options for your existing pieces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16 text-white">Business Solutions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Wholesale */}
            <div className="bg-neutral-800 rounded-lg p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-warehouse text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Wholesale</h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>Bulk purchase discounts up to 40%</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>Direct access to rare gemstone collections</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>International shipping & logistics support</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>Trade show priority access</span>
                  </li>
                </ul>
                <button className="bg-amber-600 text-white px-8 py-3 rounded-button hover:bg-amber-700 cursor-pointer whitespace-nowrap">
                  Become a Wholesaler
                </button>
              </div>
              <img 
                src="https://public.readdy.ai/ai/img_res/c6530bddabd4d559f196ab3a9a3e5393.jpg"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-10 transition-opacity group-hover:opacity-20"
                alt="Wholesale Background"
              />
            </div>

            {/* Retail */}
            <div className="bg-neutral-800 rounded-lg p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-store text-2xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Retail</h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>Personal shopping experience</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>Expert gemologist consultation</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>Custom design services</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>Lifetime maintenance support</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check text-amber-500 mr-3"></i>
                    <span>Exclusive VIP events</span>
                  </li>
                </ul>
                <button className="bg-amber-600 text-white px-8 py-3 rounded-button hover:bg-amber-700 cursor-pointer whitespace-nowrap">
                  Shop Now
                </button>
              </div>
              <img 
                src="https://public.readdy.ai/ai/img_res/0a826d4b39edec4a175fb2400bbc8dff.jpg"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-10 transition-opacity group-hover:opacity-20"
                alt="Retail Background"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif mb-8 text-white">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  ></textarea>
                </div>
                <button className="bg-amber-600 text-white px-8 py-3 rounded-button hover:bg-amber-700 cursor-pointer whitespace-nowrap">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div ref={salesChartRef} className="w-full h-96"></div>
            </div>
          </div>
        </div>
      </section>

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
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Contact</a></li>
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

export default GemstonePalace; 