"use client";

import React, { useState } from 'react';

const reviewsData: { [key: string]: { id: number; user: string; rating: number; comment: string; }[] } = {
  "Moringa Powder": [
    { id: 1, user: "Alice", rating: 5, comment: "Amazing product! I've noticed a big difference in my energy levels." },
    { id: 2, user: "John", rating: 4, comment: "Good quality, but the taste takes some getting used to." },
  ],
  "Moringa Capsules": [
    { id: 1, user: "Emma", rating: 5, comment: "Super convenient and easy to take. Highly recommend!" },
  ],
  "Moringa Tea": [
    { id: 1, user: "Chris", rating: 4, comment: "Great taste and very refreshing." },
    { id: 2, user: "Sophia", rating: 3, comment: "It's okay, but I prefer the capsules." },
  ],
  "Moringa Oil": [
    { id: 1, user: "Liam", rating: 5, comment: "Excellent for skin care. My skin feels much softer!" },
  ],
};

const ReviewPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("Moringa Powder");

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Title and Introduction */}
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Product Reviews</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Select a product to see what our customers are saying.
        </p>

        {/* Product Selection */}
        <div className="mb-12 text-center">
          <label htmlFor="product-select" className="text-lg font-medium text-gray-700 mr-4">
            Choose a Product:
          </label>
          <select
            id="product-select"
            value={selectedProduct}
            onChange={handleProductChange}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            {Object.keys(reviewsData).map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        {/* Reviews Section */}
        <div className="space-y-6">
          {reviewsData[selectedProduct]?.length > 0 ? (
            reviewsData[selectedProduct].map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">{review.user}</h3>
                <p className="text-yellow-500 mb-2">
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No reviews available for this product.</p>
          )}
        </div>

        {/* Add a Review (Optional) */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 focus:outline-none">
            Add a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
