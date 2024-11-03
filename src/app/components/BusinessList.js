// /app/components/BusinessList.jsx
'use client'; // This component needs to be a client component

import React from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Star } from 'lucide-react';

const mockBusinesses = [
  {
    id: 1,
    name: "Green Grocery Store",
    category: "stores",
    subCategory: "General Store",
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600",
    address: "123 Main St, Bangalore",
    isOpen: true,
  },
];

function BusinessList({ category, subCategory, searchQuery }) {
  const router = useRouter();

  const filteredBusinesses = mockBusinesses.filter((business) => {
    const matchesCategory = !category || business.category === category;
    const matchesSubCategory = !subCategory || business.subCategory === subCategory;
    const matchesSearch = !searchQuery ||
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.address.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSubCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
      {filteredBusinesses.map((business) => (
        <div
          key={business.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg text-black transition cursor-pointer"
          onClick={() => router.push(`/business/${business.id}`)}
        >
          <img src={business.image} alt={business.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{business.name}</h3>
            <div className="flex items-center mb-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm">{business.rating}</span>
              <span className="mx-1 text-gray-400">•</span>
              <span className="text-sm text-gray-600">{business.reviews} reviews</span>
            </div>
            <div className="text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {business.address}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BusinessList;
