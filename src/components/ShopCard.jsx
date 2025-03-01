import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star } from 'lucide-react';

const ShopCard = ({ shop }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <img 
        src={shop.imageUrl} 
        alt={shop.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{shop.name}</h3>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
            <Star size={16} className="text-yellow-500 mr-1" />
            <span className="font-medium">{shop.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mt-2 line-clamp-2">{shop.description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-500">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{shop.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{shop.hours}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <Link 
            to={`/shop/${shop.id}`}
            className="block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;