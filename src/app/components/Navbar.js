"use client";
import React from 'react';
import { MapPin, User } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">LocalFinder</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-1" />
              <span>Bangalore, India</span>
            </div>
            <button className="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
              <User className="w-5 h-5 mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;