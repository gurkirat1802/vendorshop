import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VendorHub</h3>
            <p className="mb-4">
              Connecting you with the best local vendors and shops in your area.
              Discover unique products and services from trusted businesses.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@vendorhub.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>123 Market Street, Jalandhar, Punjab</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} VendorHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;