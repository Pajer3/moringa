"use client";

import React from 'react';
import Link from 'next/link';
import { FiHelpCircle, FiPhone, FiMail, FiSearch } from 'react-icons/fi';

const Help: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Title and Introduction */}
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">How Can We Help You?</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Find answers to your questions or get in touch with our support team. We&apos;re here to help you with anything you need.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search for help topics..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
          <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Help Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FiHelpCircle className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-600">Browse through our FAQs to find quick answers to common questions.</p>
            <Link href="/faq" className="text-green-600 hover:underline mt-4 inline-block">
              Visit FAQ
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FiPhone className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">Need immediate help? Call our support team for assistance.</p>
            <a href="tel:+123456789" className="text-green-600 hover:underline mt-4 inline-block">
              +1 (234) 567-89
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FiMail className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Support</h3>
            <p className="text-gray-600">Send us an email and we&apos;ll get back to you within 24 hours.</p>
            <a href="mailto:support@moringalife.com" className="text-green-600 hover:underline mt-4 inline-block">
              support@moringalife.com
            </a>
          </div>
        </div>

        {/* Popular Questions */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Popular Questions</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/faq#what-is-moringa" className="text-lg text-gray-700 hover:underline">
                What is Moringa and how do I use it?
              </Link>
            </li>
            <li>
              <Link href="/faq#how-to-track-order" className="text-lg text-gray-700 hover:underline">
                How can I track my order?
              </Link>
            </li>
            <li>
              <Link href="/faq#return-policy" className="text-lg text-gray-700 hover:underline">
                What is your return policy?
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Need Further Assistance?</h2>
          <p className="text-lg text-gray-600 mb-4">
            If you can&apos;t find the answer you&apos;re looking for, please don&apos;t hesitate to contact our support team.
          </p>
          <Link href="/support" className="mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Help;
