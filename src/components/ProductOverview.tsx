"use client";

import React from 'react';
import { FiCheckCircle, FiShield, FiHeart, FiTrendingUp } from 'react-icons/fi';

const ProductOverview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-6">Discover the Power of Moringa</h2>
        
        {/* Subheading */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Our Moringa products are packed with nutrients, antioxidants, and anti-inflammatory properties that can help boost your wellness journey. Learn why Moringa is the perfect addition to your daily routine.
        </p>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <FiCheckCircle className="text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Rich in Nutrients</h3>
            <p className="text-gray-600 mt-2">
              Moringa is a powerhouse of essential vitamins and minerals, providing the nourishment your body needs.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <FiShield className="text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Supports Immune System</h3>
            <p className="text-gray-600 mt-2">
              Boost your immune system with Moringa&apos;s high content of antioxidants and essential nutrients.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <FiHeart className="text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Promotes Heart Health</h3>
            <p className="text-gray-600 mt-2">
              Keep your heart healthy with Moringa&apos;s heart-friendly properties that support cardiovascular health.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <FiTrendingUp className="text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Enhances Energy Levels</h3>
            <p className="text-gray-600 mt-2">
              Feel more energized and vibrant with Moringa, which naturally boosts your energy levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
