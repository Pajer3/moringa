"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const HowItWorks: React.FC = () => {
  // Example steps data for the slideshow
  const steps = [
    {
      id: 1,
      title: "Step 1: Choose Your Moringa Product",
      description: "Select from our range of Moringa products tailored to meet your health needs.",
      imageSrc: "/step1.png", // Replace with your image path
    },
    {
      id: 2,
      title: "Step 2: Place Your Order",
      description: "Order easily through our website and have it delivered to your doorstep.",
      imageSrc: "/step2.jpg", // Replace with your image path
    },
    {
      id: 3,
      title: "Step 3: Enjoy the Benefits",
      description: "Incorporate Moringa into your daily routine and experience the health benefits.",
      imageSrc: "/step3.jpg", // Replace with your image path
    },
  ];

  // State to manage the current slide
  const [currentStep, setCurrentStep] = useState(0);

  // Function to go to the next slide
  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  // Function to go to the previous slide
  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-6">How It Works</h2>
        
        {/* Slideshow */}
        <div className="relative">
          <div className="flex justify-center">
            <div className="relative h-64 w-full max-w-3xl">
              <Image
                src={steps[currentStep].imageSrc}
                alt={steps[currentStep].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">{steps[currentStep].title}</h3>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{steps[currentStep].description}</p>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={prevStep}
              className="px-4 py-2 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
