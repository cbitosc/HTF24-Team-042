"use client";
import React from 'react';
import { Search } from 'lucide-react';

function SearchBar({ onSearch }) {
  return (
    <div className="relative mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for local businesses..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
    </div>
  );
}

export default SearchBar;