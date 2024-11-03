"use client";
import React from 'react';

import { Store, Utensils, Scissors } from 'lucide-react';

const categories = {
  stores: {
    icon: Store,
    subCategories: ['General Store', 'Retail Shops', 'Dairy Shops', 'Stationery', 'Wholesale Shops']
  },
  services: {
    icon: Scissors,
    subCategories: ['Salon', 'Beauty Parlor', 'Tailors', 'Boutique', 'Canteen Services']
  },
  food: {
    icon: Utensils,
    subCategories: ['Restaurants', 'Food Courts', 'Cafes', 'Street Food']
  }
};

function Categories({ 
  onCategorySelect, 
  onSubCategorySelect,
  selectedCategory,
  selectedSubCategory 
}) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Explore by Categories</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {Object.entries(categories).map(([category, { icon: Icon }]) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`p-4 rounded-lg flex flex-col items-center justify-center transition
              ${selectedCategory === category 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          >
            <Icon className="w-6 h-6 mb-2" />
            <span className="capitalize">{category}</span>
          </button>
        ))}
      </div>

      {selectedCategory && categories[selectedCategory] && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-wrap gap-2">
            {categories[selectedCategory].subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => onSubCategorySelect(sub)}
                className={`px-4 py-2 rounded-full text-sm transition
                  ${selectedSubCategory === sub
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;