import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { shops } from '../data/shops';
import { MapPin, Phone, Mail, Globe, Clock, ChevronLeft, Star, ShoppingBag } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const ShopDetailsPage = () => {
  const { id } = useParams();
  const shop = shops.find(s => s.id === Number(id));

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success('Message submitted successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Reload page after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  // Jalandhar coordinates
  const jalandharPosition = [31.3260, 75.5762];

  if (!shop) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Shop Not Found</h2>
        <p className="mb-8">The shop you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ChevronLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <ToastContainer />
      <div className="relative h-80 bg-gray-900">
        <img
          src={shop.imageUrl}
          alt={shop.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <ChevronLeft size={20} />
              <span>Back to Shops</span>
            </Link>
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{shop.name}</h1>
                <div className="flex items-center mt-2">
                  <div className="flex items-center bg-yellow-400 text-yellow-900 px-2 py-1 rounded mr-3">
                    <Star size={16} className="mr-1" />
                    <span className="font-medium">{shop.rating}</span>
                  </div>
                  <span className="text-white/80">({shop.reviews} reviews)</span>
                </div>
              </div>
              <div className="hidden md:block">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors">
                  Contact Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Shop Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">About {shop.name}</h2>
              <p className="text-gray-700 mb-6">{shop.longDescription}</p>

              <h3 className="text-xl font-semibold mb-3">Features</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {shop.features.map((feature, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>

              {/* <h3 className="text-xl font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {shop.galleryImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${shop.name} gallery ${index + 1}`} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div> */}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Featured Products</h2>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {shop.products.map(product => (
                  <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">${product.price}</span>
                        <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                          <ShoppingBag size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Details */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Address</span>
                    <address className="not-italic text-gray-600">{shop.address}</address>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone size={20} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Phone</span>
                    <a href={`tel:${shop.phone}`} className="text-gray-600 hover:text-indigo-600">{shop.phone}</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={20} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Email</span>
                    <a href={`mailto:${shop.email}`} className="text-gray-600 hover:text-indigo-600">{shop.email}</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Globe size={20} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Website</span>
                    <a href={`https://${shop.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">{shop.website}</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">Business Hours</span>
                    <span className="text-gray-600">{shop.hours}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="h-64 rounded-lg overflow-hidden">
                <MapContainer
                  center={jalandharPosition}
                  zoom={13}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={jalandharPosition}>
                    <Popup>
                      {shop.name} <br /> {shop.address}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Get Directions
              </button>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsPage;