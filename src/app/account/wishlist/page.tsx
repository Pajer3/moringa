"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';

const Wishlist: React.FC = () => {
  // Example wishlist data; in a real app, this would likely be fetched from an API
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Moringa Powder",
      description: "100% Organic Moringa Powder, packed with nutrients.",
      price: "$19.99",
      imageSrc: "/Moringa_Powder.png",
      link: "/products/moringa-powder",
    },
    {
      id: 2,
      name: "Moringa Tea",
      description: "Delicious and healthy Moringa tea bags.",
      price: "$14.99",
      imageSrc: "/Moringa_Tea.png",
      link: "/products/moringa-tea",
    },
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    // Add logic to add the item to the cart
    console.log(`Item ${id} added to cart`);
  };

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">Your Wishlist</h2>

        {/* Wishlist Items */}
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <div className="mt-4 text-green-600 text-lg font-bold">{item.price}</div>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => addToCart(item.id)}
                    className="flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200"
                  >
                    <FiShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                  >
                    <FiTrash2 className="mr-2" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FiHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Your wishlist is empty</h3>
            <p className="text-gray-600 mt-2">Start adding items you love to your wishlist!</p>
            <Link href="/shop" className="mt-4 inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200">
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
