"use client";

import React from 'react';
import Image from 'next/image';
import { FiStar } from 'react-icons/fi';

const Testimonials: React.FC = () => {
  // Example testimonials data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Moringa Life's products have transformed my daily routine. The Moringa Powder is amazing!",
      rating: 5,
      imageSrc: "/pfp/John.png", // Replace with your image path
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I've been using the Moringa Oil for my skin, and it's been fantastic. Highly recommend!",
      rating: 4,
      imageSrc: "/pfp/Dog.jpg", // Replace with your image path
    },
    {
      id: 3,
      name: "Emily Johnson",
      text: "The Moringa Capsules are so convenient. I've noticed a real boost in my energy levels.",
      rating: 5,
      imageSrc: "/pfp/Nia.jpg", 
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-6">What Our Customers Are Saying</h2>
        
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <p className="text-gray-700 italic mb-4">&quot;{testimonial.text}&quot;</p>
              <div className="text-yellow-500 mb-2">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FiStar key={index} className="inline-block w-5 h-5" />
                ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
