"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiUser, FiShoppingCart, FiHelpCircle, FiClipboard, FiSmile, FiMenu, FiX, FiLogIn, FiInfo } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-green-800 transition-colors duration-200 focus:outline-none"
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
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
            <FiInfo className="mr-1" />
            FAQ
          </Link>
          <Link href="/reviews" className="flex items-center text-gray-700 hover:text-green-800 transition-colors duration-200">
            <FiSmile className="mr-1" />
            Reviews
          </Link>
          {/* Login Button */}
          <Link href="/login" className="flex items-center text-gray-700 hover:text-green-800 transition-colors duration-200">
            <FiLogIn className="mr-1" />
            Login
          </Link>
        </nav>

        {/* Cart Icon (Desktop) */}
        <div className="hidden md:flex relative">
          <Link href="/cart" className="flex items-center text-gray-700 hover:text-green-800 transition-colors duration-200">
            <FiShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <Link href="/account" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <FiUser className="inline mr-2" />
            Account
          </Link>
          <Link href="/order-status" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <FiClipboard className="inline mr-2" />
            Order Status
          </Link>
          <Link href="/help" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <FiHelpCircle className="inline mr-2" />
            Help
          </Link>
          <Link href="/faq" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <FiInfo className="inline mr-2" />
            FAQ
          </Link>
          <Link href="/reviews" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <FiSmile className="inline mr-2" />
            Reviews
          </Link>
          <Link href="/cart" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 relative">
            <FiShoppingCart className="inline mr-2" />
            Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
          </Link>
          {/* Login Button */}
          <Link href="/login" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <FiLogIn className="inline mr-2" />
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
