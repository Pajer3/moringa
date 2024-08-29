"use client";

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Moringa?",
      answer: "Moringa is a nutrient-rich plant known for its numerous health benefits. It is often referred to as the 'miracle tree' due to its high nutritional value."
    },
    {
      question: "How do I use Moringa Powder?",
      answer: "Moringa powder can be added to smoothies, juices, soups, and salads. It's an easy way to boost your nutrient intake with just a spoonful."
    },
    {
      question: "Are there any side effects?",
      answer: "Moringa is generally safe for most people when consumed in moderate amounts. However, it's always best to consult with a healthcare provider before starting any new supplement."
    },
    {
      question: "Where do you source your Moringa?",
      answer: "Our Moringa is sourced from organic farms where it is grown without pesticides or harmful chemicals, ensuring the highest quality."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">Frequently Asked Questions</h2>
        
        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-gray-800"
              >
                {faq.question}
                {openIndex === index ? (
                  <FiChevronUp className="text-gray-500 w-5 h-5" />
                ) : (
                  <FiChevronDown className="text-gray-500 w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="py-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
