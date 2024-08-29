"use client";

import React from 'react';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';

const OrderStatus: React.FC = () => {
  return (
    <section className="relative py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        {/* Title and Introduction */}
        <h1 className="text-4xl font-bold text-green-800 mb-8">Track Your Orders</h1>
        <p className="text-lg text-gray-600 mb-12">
          Updates about your orders will be sent to your email. Please check your inbox for the latest information.
        </p>

        {/* Fun Illustration or Animation */}
        <div className="relative mb-12">
          {/* Add your SVG or animated illustration here */}
          <div className="w-full h-64 bg-green-200 rounded-lg flex items-center justify-center">
            {/* Example: A simple animated element */}
            <div className="flex space-x-2 animate-bounce">
              <div className="w-10 h-10 bg-green-500 rounded-full"></div>
              <div className="w-10 h-10 bg-green-600 rounded-full"></div>
              <div className="w-10 h-10 bg-green-700 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Contact Support CTA */}
        <p className="text-lg text-gray-600 mb-4">
          If you have any questions or need further assistance, feel free to{" "}
          <Link href="/support" className="text-green-600 hover:underline">
            contact our support team
          </Link>.
        </p>

        {/* Continue Shopping Button */}
        <Link href="/shop" className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default OrderStatus;
