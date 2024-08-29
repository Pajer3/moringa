"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiUser, FiShoppingCart, FiHelpCircle, FiClipboard, FiSmile } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image src="/logo.png" alt="Company Logo" width={40} height={40} className="h-10 w-10" />
          </Link>
          <Link href="/" className="text-2xl font-bold text-green-800">
            Moringa Life
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link href="/account" className="flex items-center text-gray-700 hover:text-green-800 transition-colors duration-200">
            <FiUser className="mr-1" />
            Account
          </Link>
          <Link href="/order-status" className="flex items-center text-gray-700 hover:text-green-800 transition-colors duration-200">
            <FiClipboard className="mr-1" />
            Order Status
          </Link>
          <Link href="/help" className="flex items-center text-gray-700 hover:text-green-800 transition-colors duration-200">
            <FiHelpCircle className="mr-1" />
            Help
          </Link>
          <Link href="/faq" className="flex items-center text-gray-700 hover:text-green-800 transition-colors duration-200">
            FAQ
          </Link>
          <Link href="/reviews" className="flex items-center text-gray-700 hover:text-green-800 transition-colors duration-200">
            <FiSmile className="mr-1" />
            Reviews
          </Link>
        </nav>

        {/* Cart Icon */}
        <Link href="/cart" className="relative flex items-center text-gray-700 hover:text-green-800 transition-colors duration-200">
          <FiShoppingCart className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
