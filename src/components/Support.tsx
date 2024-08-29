"use client";

import React, { useState } from 'react';
import { FiMail, FiPhone, FiHelpCircle, FiSend } from 'react-icons/fi';
import Link from 'next/link';

const Support: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending an email or saving the inquiry)
    console.log("Support request submitted:", { subject, message, email });
    // Clear form fields after submission
    setSubject("");
    setMessage("");
    setEmail("");
  };

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Title and Introduction */}
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">We&apos;re Here to Help</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Our support team is ready to assist you. Choose one of the options below or send us a message, and we&apos;ll get back to you as soon as possible.
        </p>

        {/* Support Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FiMail className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600">Send us an email at <a href="mailto:support@moringalife.com" className="text-green-600 hover:underline">support@moringalife.com</a> and we&apos;ll respond within 24 hours.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FiPhone className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">Reach us at <a href="tel:+123456789" className="text-green-600 hover:underline">+1 (234) 567-89</a> for immediate assistance.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FiHelpCircle className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">FAQ</h3>
            <p className="text-gray-600">Find quick answers to common questions in our <Link href="/faq" className="text-green-600 hover:underline">FAQ section</Link>.</p>
          </div>
        </div>

        {/* Support Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your subject"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                rows={4}
                placeholder="Describe your issue or question"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <FiSend className="inline-block mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Additional Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Prefer to speak with someone directly? Call us at <a href="tel:+123456789" className="text-green-600 hover:underline">+1 (234) 567-89</a> or email us at <a href="mailto:support@moringalife.com" className="text-green-600 hover:underline">support@moringalife.com</a>.
          </p>
          <p className="text-lg text-gray-600 mt-2">Our support hours are Monday to Friday, 9 AM - 6 PM EST.</p>
        </div>
      </div>
    </section>
  );
};

export default Support;
