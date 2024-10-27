"use client";
import React from 'react';
import Navbar from './Navbar/page';
import SearchBar from './Search/page';
import { MapPin, Store, Clock, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center max-w-4xl mb-6">
            Discover Amazing Local Shops Around You
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-2xl mb-8">
            Find the best local businesses, read reviews, and support your community
          </p>
          <SearchBar />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-violet-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Why Choose LocalFinder?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-black">
            {[
              {
                icon: <MapPin className="h-8 w-8 text-purple-600" />,
                title: "Find Nearby Shops",
                description: "Discover local businesses within walking distance of your location"
              },
              {
                icon: <Store className="h-8 w-8 text-purple-600" />,
                title: "Support Local",
                description: "Help your community thrive by supporting local businesses"
              },
              {
                icon: <Star className="h-8 w-8 text-purple-600" />,
                title: "Verified Reviews",
                description: "Read authentic reviews from real customers in your area"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition duration-300">
                <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Shops Preview */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Popular Near You</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-black">
            {[
              {
                image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
                name: "The Coffee House",
                type: "Café",
                rating: 4.8
              },
              {
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
                name: "Fresh Market",
                type: "Grocery Store",
                rating: 4.6
              },
              {
                image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
                name: "Bookworm's Paradise",
                type: "Bookstore",
                rating: 4.9
              }
            ].map((shop, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${shop.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{shop.name}</h3>
                  <p className="text-gray-600 mb-4">{shop.type}</p>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-gray-700">{shop.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;