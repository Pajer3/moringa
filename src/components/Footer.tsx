"use client";

import React from 'react';
import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Moringa Life</h3>
            <p className="text-gray-200 leading-relaxed">
              At Moringa Life, we believe in the power of nature to heal, nurture, and rejuvenate. Every product we create is crafted with love and care, bringing you closer to a healthier, happier life.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Need Help?</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:underline">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Join Our Community</h4>
            <p className="text-gray-200 mb-4">
              Stay connected with us for the latest updates, health tips, and more!
            </p>
            <div className="flex space-x-6">
              <Link href="https://facebook.com" target="_blank" className="hover:text-gray-400">
                <FiFacebook className="w-7 h-7" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-gray-400">
                <FiInstagram className="w-7 h-7" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-gray-400">
                <FiTwitter className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Moringa Life. Crafted with ❤️ for your well-being.</p>
          <p className="mt-2">Your health is our passion. Let&apos;s grow together.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
