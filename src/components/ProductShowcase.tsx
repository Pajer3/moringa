"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductShowcase: React.FC = () => {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Moringa Powder",
      description: "100% Organic Moringa Powder, packed with nutrients.",
      price: "$19.99",
      imageSrc: "/Moringa_Powder.png",
      link: "/products/moringa-powder"
    },
    {
      id: 2,
      name: "Moringa Capsules",
      description: "Easy-to-swallow Moringa capsules for daily use.",
      price: "$24.99",
      imageSrc: "/Moringa_Capsules.png",
      link: "/products/moringa-capsules"
    },
    {
      id: 3,
      name: "Moringa Tea",
      description: "Delicious and healthy Moringa tea bags.",
      price: "$14.99",
      imageSrc: "/Moringa_Tea.png",
      link: "/products/moringa-tea"
    },
    {
      id: 4,
      name: "Moringa Oil",
      description: "Cold-pressed Moringa oil for skin and hair care.",
      price: "$29.99",
      imageSrc: "/Moringa_Oil.png",
      link: "/products/moringa-oil"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-6">Our Featured Products</h2>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain" // Changed to 'contain' for better image scaling
                  objectPosition="center" // Center the image within the container
                  className="hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4 text-green-600 text-lg font-bold">{product.price}</div>
                <Link href={product.link} className="inline-block mt-4 px-6 py-2 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
