import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Store size={28} />
            <span>VendorHub</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;