// /app/page.jsx
"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import BusinessList from '../components/BusinessList';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleBack = () => {
    if (selectedSubCategory) {
      setSelectedSubCategory('');
    } else if (selectedCategory) {
      setSelectedCategory('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar />
      <main className="max-w-4xl mx-auto my-10">
        {(selectedCategory || selectedSubCategory) && (
          <button
            onClick={handleBack}
            className="flex items-center mb-4 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Back
          </button>
        )}
        <SearchBar onSearch={setSearchQuery} />
        <Categories
          onCategorySelect={setSelectedCategory}
          onSubCategorySelect={setSelectedSubCategory}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
        />
        <BusinessList
          category={selectedCategory}
          subCategory={selectedSubCategory}
          searchQuery={searchQuery}
        />
      </main>
    </div>
  );
}
