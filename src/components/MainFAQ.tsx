"use client";

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const MainFAQ: React.FC = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  // Example FAQ data; in a real app, this might come from an API or CMS
  const faqData = [
    {
      question: "What is Moringa?",
      answer:
        "Moringa is a plant that has been used for centuries due to its medicinal properties and health benefits. It’s rich in healthy antioxidants and bioactive plant compounds.",
    },
    {
      question: "How do I use Moringa products?",
      answer:
        "Moringa products can be used in various ways, such as adding Moringa powder to your smoothies or tea, taking capsules, or using Moringa oil for skin and hair care.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. If you are not satisfied with your purchase, please contact our support team to initiate a return.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 5-7 business days within the continental US. International shipping times may vary.",
    },
    {
      question: "Are your products organic?",
      answer:
        "Yes, all our Moringa products are 100% organic and sourced from certified organic farms.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Title and Introduction */}
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Got questions? We&apos;ve got answers! Browse through our FAQs or contact us if you need further assistance.
        </p>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                {expandedQuestion === index ? (
                  <FiChevronUp className="w-6 h-6 text-green-600" />
                ) : (
                  <FiChevronDown className="w-6 h-6 text-green-600" />
                )}
              </div>
              {expandedQuestion === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Us */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Can&apos;t find the answer you&apos;re looking for?{" "}
            <a href="/support" className="text-green-600 hover:underline">
              Contact our support team
            </a>{" "}
            and we&apos;ll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainFAQ;
