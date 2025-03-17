'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'The Fascinating World of Rare Gemstones',
    excerpt: 'Discover the most extraordinary and valuable gems from around the globe, their unique properties, and what makes them truly special.',
    date: 'March 15, 2025',
    category: 'Gemstones',
    image: '/images/blog/rare-gemstones.jpg',
    author: 'Victoria Richardson',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Investment Guide: Precious Stones',
    excerpt: 'Learn how to make informed decisions when investing in precious gems, including market trends, valuation factors, and risk management.',
    date: 'March 14, 2025',
    category: 'Investment',
    image: '/images/blog/investment-guide.jpg',
    author: 'Alexander Thompson',
    readTime: '10 min read'
  },
  {
    id: 3,
    title: 'The Art of Gem Cutting',
    excerpt: 'An inside look at the meticulous process of transforming rough stones into dazzling masterpieces through expert cutting techniques.',
    date: 'March 13, 2025',
    category: 'Craftsmanship',
    image: '/images/blog/gem-cutting.jpg',
    author: 'Michael Chen',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Understanding Diamond Clarity',
    excerpt: 'A comprehensive guide to diamond clarity grades, what they mean, and how they affect the value and appearance of your diamond.',
    date: 'March 12, 2025',
    category: 'Education',
    image: '/images/blog/diamond-clarity.jpg',
    author: 'Sarah Johnson',
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'Sustainable Mining Practices',
    excerpt: 'Exploring the latest developments in ethical gemstone mining and how the industry is working towards environmental sustainability.',
    date: 'March 11, 2025',
    category: 'Sustainability',
    image: '/images/blog/sustainable-mining.jpg',
    author: 'David Kumar',
    readTime: '9 min read'
  },
  {
    id: 6,
    title: 'The History of Famous Gems',
    excerpt: 'Journey through time as we explore the fascinating stories behind some of the world\'s most famous and historically significant gemstones.',
    date: 'March 10, 2025',
    category: 'History',
    image: '/images/blog/famous-gems.jpg',
    author: 'Emma Wilson',
    readTime: '8 min read'
  }
];

const categories = [
  { name: 'All Posts', count: 6 },
  { name: 'Gemstones', count: 1 },
  { name: 'Investment', count: 1 },
  { name: 'Craftsmanship', count: 1 },
  { name: 'Education', count: 1 },
  { name: 'Sustainability', count: 1 },
  { name: 'History', count: 1 }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black/50">
        <div className="absolute inset-0 bg-[url('/images/blog-hero.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-gray-300">Insights, stories, and knowledge from the world of gemstones</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#c4a484]">{post.author}</span>
                      <button className="text-[#c4a484] hover:text-[#b39474] transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-[#2a2a2a] rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name} className="flex items-center justify-between">
                    <button className="text-gray-300 hover:text-[#c4a484] transition-colors">
                      {category.name}
                    </button>
                    <span className="text-gray-400 text-sm">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-[#2a2a2a] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">
                Stay updated with our latest articles and exclusive offers.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-[#c4a484]"
                />
                <button className="px-6 py-2 bg-[#c4a484] text-white rounded-button hover:bg-[#b39474] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 