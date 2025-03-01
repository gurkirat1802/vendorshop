import React from 'react';
import Hero from '../components/Hero';
import ShopCard from '../components/ShopCard';
import { shops } from '../data/shops';
import { ShoppingBag, Users, Award, Clock } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose VendorHub</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <ShoppingBag size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
              <p className="text-gray-600">Discover hand-picked vendors offering unique products and services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Users size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Community</h3>
              <p className="text-gray-600">Support local businesses and strengthen your community.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Award size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">All vendors are vetted to ensure high-quality products and services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <Clock size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Convenient Shopping</h3>
              <p className="text-gray-600">Find all the information you need to shop with confidence.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Shops Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Shops</h2>
            <button className="text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shops.map(shop => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a Vendor?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our platform and reach more customers. List your shop on VendorHub and grow your business.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Register Your Shop
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;