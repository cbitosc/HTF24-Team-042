"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const RegisterPage = () => {
  const router = useRouter(); // Initialize the router
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [userType, setUserType] = useState('customer');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check for duplicate email or contact
    const existingUser = users.find(u => u.email === email || u.contact === contact);
    if (existingUser) {
      if (existingUser.email === email) {
        setErrorMessage('Email already exists.');
      } else {
        setErrorMessage('Contact number already exists.');
      }
      return;
    }

    // Create new user object
    const newUser = { email, contact, userType };
    users.push(newUser); // Add new user to the users array
    localStorage.setItem('users', JSON.stringify(users)); // Save updated users to local storage

    setSuccessMessage('Registration successful! Please login.');

    // Clear form fields after successful registration
    setEmail('');
    setContact('');

    // Redirect to login page after a short delay
    setTimeout(() => {
      router.push('/login'); // Navigate to the login page
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Register</h2>

        {/* User Type Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${userType === 'customer' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setUserType('customer')}
          >
            As Customer
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${userType === 'business' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setUserType('business')}
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

        {/* Success Message */}
        {successMessage && (
          <div className="text-green-500 mb-4">
            {successMessage}
          </div>
        )}

        {/* Registration Form */}
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
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
