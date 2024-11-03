"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [userType, setUserType] = useState('customer');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setErrorMessage(''); // Clear error message on user type change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.contact === contact);

    if (user) {
      // User found, set login status in local storage
      localStorage.setItem('userLoggedIn', 'true');
      
      // Redirect to appropriate home page based on user type
      if (user.userType === 'customer') {
        router.push('/'); // Replace with your customer home page route
      } else {
        router.push('/home'); // Replace with your business home page route
      }
    } else {
      // User not found, show an error message
      setErrorMessage('User not found. Please check your credentials.');
    }
  };

  const handleRegisterRedirect = () => {
    router.push('/register'); // Redirect to the registration page
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Login</h2>

        {/* User Type Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${userType === 'customer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleUserTypeChange('customer')}
          >
            As Customer
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${userType === 'business' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleUserTypeChange('business')}
          >
            As Business Owner
          </button>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 mb-4">
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-gray-600 font-semibold">Contact Number</label>
            <input
              type="tel"
              id="contact"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Login
          </button>

          {/* Register Button */}
          <button
            type="button"
            onClick={handleRegisterRedirect}
            className="w-full py-2 mt-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
