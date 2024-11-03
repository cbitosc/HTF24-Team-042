"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const router = useRouter();

  useEffect(() => {
    // Check user login status (mocking a simple check here)
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Log out user and update local storage
      localStorage.setItem('userLoggedIn', 'false');
      setIsLoggedIn(false); // Update state
      router.push('/login'); // Redirect to login
    } else {
      router.push('/login'); // Redirect to login if not logged in
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              LocalFinder
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition">Contact</Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
              </button>
              <button onClick={handleLoginLogout} className="p-2 hover:bg-gray-100 rounded-full">
                {isLoggedIn ? (
                  <User className="h-5 w-5 text-gray-700" /> // User icon if logged in
                ) : (
                  <span className="text-gray-700">Login</span> // "Login" text if not logged in
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contact</Link>
            <div className="flex items-center space-x-4 px-3 py-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
              </button>
              <button onClick={handleLoginLogout} className="p-2 hover:bg-gray-100 rounded-full">
                {isLoggedIn ? (
                  <User className="h-5 w-5 text-gray-700" /> // User icon if logged in
                ) : (
                  <span className="text-gray-700">Login</span> // "Login" text if not logged in
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
