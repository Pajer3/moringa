"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-green-100">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/moringabanner.png" // Replace with your image path
          alt="Moringa Leaves"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="relative container mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold text-black leading-tight">
          Welcome to Moringa Life 🌿
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-black max-w-2xl">
          Experience the natural benefits of Moringa – a superfood for your body and soul. Discover our range of organic products designed to boost your wellness journey.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex space-x-4">
          <Link href="/shop" className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200">
            Shop Now
          </Link>
          <Link href="/learn-more" className="px-6 py-3 bg-white text-green-800 text-lg font-medium rounded-lg shadow-md hover:bg-gray-100 transition duration-200">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
