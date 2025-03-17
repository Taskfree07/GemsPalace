'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Diamond Ring',
    price: '$1,999',
    image: '/images/products/diamond-ring.jpg',
    category: 'Rings',
    description: 'Elegant diamond ring with 1.5 carat center stone'
  },
  {
    id: 2,
    name: 'Sapphire Necklace',
    price: '$2,499',
    image: '/images/products/sapphire-necklace.jpg',
    category: 'Necklaces',
    description: 'Stunning blue sapphire pendant with diamond accents'
  },
  {
    id: 3,
    name: 'Emerald Earrings',
    price: '$1,799',
    image: '/images/products/emerald-earrings.jpg',
    category: 'Earrings',
    description: 'Classic emerald drop earrings with diamond details'
  },
  {
    id: 4,
    name: 'Ruby Bracelet',
    price: '$2,299',
    image: '/images/products/ruby-bracelet.jpg',
    category: 'Bracelets',
    description: 'Luxurious ruby and diamond tennis bracelet'
  },
  {
    id: 5,
    name: 'Pearl Set',
    price: '$1,599',
    image: '/images/products/pearl-set.jpg',
    category: 'Sets',
    description: 'Complete pearl jewelry set with necklace and earrings'
  },
  {
    id: 6,
    name: 'Gold Chain',
    price: '$899',
    image: '/images/products/gold-chain.jpg',
    category: 'Necklaces',
    description: '18K gold chain with adjustable length'
  }
];

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black/50">
        <div className="absolute inset-0 bg-[url('/images/products-hero.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Our Collection</h1>
            <p className="text-xl text-gray-300">Discover our exquisite range of fine jewelry</p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-6 py-2 bg-[#c4a484] text-white rounded-button hover:bg-[#b39474] transition-colors">
            All Products
          </button>
          <button className="px-6 py-2 bg-transparent border border-[#c4a484] text-[#c4a484] rounded-button hover:bg-[#c4a484]/10 transition-colors">
            Rings
          </button>
          <button className="px-6 py-2 bg-transparent border border-[#c4a484] text-[#c4a484] rounded-button hover:bg-[#c4a484]/10 transition-colors">
            Necklaces
          </button>
          <button className="px-6 py-2 bg-transparent border border-[#c4a484] text-[#c4a484] rounded-button hover:bg-[#c4a484]/10 transition-colors">
            Earrings
          </button>
          <button className="px-6 py-2 bg-transparent border border-[#c4a484] text-[#c4a484] rounded-button hover:bg-[#c4a484]/10 transition-colors">
            Bracelets
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[#c4a484] text-sm">{product.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#c4a484]">{product.price}</span>
                  <button className="px-6 py-2 bg-[#c4a484] text-white rounded-button hover:bg-[#b39474] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 