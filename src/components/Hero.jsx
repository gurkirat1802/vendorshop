import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Local Vendors & Shops
          </h1>
          <p className="text-xl mb-8">
            Find the best local businesses in your area. Browse through our curated collection
            of vendors offering unique products and services.
          </p>
          
          <div className="bg-white rounded-lg p-2 flex items-center shadow-lg max-w-xl mx-auto">
            <Search size={20} className="text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="Search for shops or products..."
              className="w-full px-4 py-2 outline-none text-gray-700"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center">
              <ShoppingBag size={18} className="mr-2" />
              <span>Search</span>
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Restaurants</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Clothing</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Electronics</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Groceries</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Handmade</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;