"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiUser, FiShoppingBag, FiHeart, FiSettings, FiHelpCircle } from 'react-icons/fi';

const Account: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await fetch('/api/user', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to load user data');
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return null; // This should never happen because the user is redirected if not logged in
  }

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">Welcome Back, {user.name} 🌿</h2>
          <p className="text-lg text-gray-600 mt-2">We&apos;re glad to have you here! Let&apos;s manage your account and keep your wellness journey on track.</p>
        </div>

        {/* Profile Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-8">
            {/* Profile Picture */}
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={user.profilePicture || '/images/default-profile.jpg'}
                alt="User Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            {/* User Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <Link href="/account/settings" className="text-green-600 hover:underline mt-4 block">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Account Navigation */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/account/orders" className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition">
            <div className="flex items-center space-x-4">
              <FiShoppingBag className="w-6 h-6 text-green-800" />
              <span className="text-xl font-semibold text-gray-800">Order History</span>
            </div>
            <p className="mt-2 text-gray-600">View your past orders and track current ones.</p>
          </Link>

          <Link href="/account/wishlist" className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition">
            <div className="flex items-center space-x-4">
              <FiHeart className="w-6 h-6 text-green-800" />
              <span className="text-xl font-semibold text-gray-800">Wishlist</span>
            </div>
            <p className="mt-2 text-gray-600">Keep track of the products you love.</p>
          </Link>

          <Link href="/account/settings" className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition">
            <div className="flex items-center space-x-4">
              <FiSettings className="w-6 h-6 text-green-800" />
              <span className="text-xl font-semibold text-gray-800">Account Settings</span>
            </div>
            <p className="mt-2 text-gray-600">Update your account information and preferences.</p>
          </Link>

          <Link href="/account/support" className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition">
            <div className="flex items-center space-x-4">
              <FiHelpCircle className="w-6 h-6 text-green-800" />
              <span className="text-xl font-semibold text-gray-800">Customer Support</span>
            </div>
            <p className="mt-2 text-gray-600">Need help? We&apos;re here for you.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Account;
