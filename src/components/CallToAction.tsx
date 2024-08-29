"use client";

import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-green-800 text-white text-center">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Wellness?</h2>
        
        {/* Supporting Text */}
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have made Moringa a part of their daily routine. Start your journey to better health today!
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/shop" className="px-8 py-3 bg-white text-green-800 text-lg font-medium rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
            Shop Now
          </Link>
          <Link href="/learn-more" className="px-8 py-3 bg-transparent border border-white text-lg font-medium rounded-lg hover:bg-white hover:text-green-800 transition duration-200">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
