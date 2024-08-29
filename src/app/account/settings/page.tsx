"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

const AccountSettings: React.FC = () => {
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane.doe@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("/images/user-profile.jpg"); // Placeholder image path

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to save changes (e.g., API calls)
    console.log("Changes saved:", { name, email, currentPassword, newPassword, confirmPassword });
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">Account Settings</h2>

        <form onSubmit={handleSaveChanges} className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          {/* Profile Picture */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={profilePicture}
                alt="User Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Change Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="mt-2"
              />
            </div>
          </div>

          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <div className="flex items-center mt-2">
              <FiUser className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <div className="flex items-center mt-2">
              <FiMail className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Password Fields */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Current Password</label>
            <div className="flex items-center mt-2">
              <FiLock className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your current password"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">New Password</label>
            <div className="flex items-center mt-2">
              <FiLock className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter a new password"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Confirm New Password</label>
            <div className="flex items-center mt-2">
              <FiLock className="text-gray-500 w-6 h-6 mr-3" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Confirm your new password"
              />
            </div>
          </div>

          {/* Save and Cancel Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={() => console.log('Changes canceled')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountSettings;
