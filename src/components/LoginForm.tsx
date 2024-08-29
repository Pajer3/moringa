"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiMail, FiLock, FiCheck, FiX } from 'react-icons/fi';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const router = useRouter();

  const validateEmail = (email: string) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailValid(isValid);
    return isValid;
  };

  const validatePassword = (password: string) => {
    const isValid = password.length >= 6;
    setPasswordValid(isValid);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      setError("Please correct the errors in the form.");
      return;
    }

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        router.push('/');
      } else if (response.status === 401) {
        setError("Incorrect email or password. Please try again.");
      } else {
        setError(data.message || "An unexpected error occurred. Please try again later.");
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-10 shadow-xl rounded-xl">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-6">
        Welcome Back 🌿
      </h2>
      {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label className="block text-lg font-medium text-gray-700">Email</label>
          <div className="flex items-center mt-2">
            <FiMail className="text-gray-500 w-5 h-5 mr-3" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                validateEmail(email);
                setEmailTouched(true);
              }}
              onFocus={() => setEmailTouched(true)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg text-gray-900"
              placeholder="you@example.com"
              required
            />
            {emailValid !== null && emailTouched && (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                {emailValid ? (
                  <FiCheck className="text-green-500 w-5 h-5" />
                ) : (
                  <FiX className="text-red-500 w-5 h-5" />
                )}
              </span>
            )}
          </div>
          {emailValid === false && emailTouched && <p className="text-red-500 text-sm mt-2">Please enter a valid email address.</p>}
        </div>
        <div className="relative">
          <label className="block text-lg font-medium text-gray-700">Password</label>
          <div className="flex items-center mt-2">
            <FiLock className="text-gray-500 w-5 h-5 mr-3" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                validatePassword(password);
                setPasswordTouched(true);
              }}
              onFocus={() => setPasswordTouched(true)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg text-gray-900"
              placeholder="********"
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="ml-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
            {passwordValid !== null && passwordTouched && (
              <span className="absolute right-14 top-1/2 transform -translate-y-1/2">
                {passwordValid ? (
                  <FiCheck className="text-green-500 w-5 h-5" />
                ) : (
                  <FiX className="text-red-500 w-5 h-5" />
                )}
              </span>
            )}
          </div>
          {passwordValid === false && passwordTouched && <p className="text-red-500 text-sm mt-2">Password must be at least 6 characters long.</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-md text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
          >
            Log In
          </button>
        </div>
      </form>
      <p className="mt-6 text-center text-gray-600 text-sm">
        Don’t have an account?{' '}
        <Link href="/signup" className="text-green-600 hover:text-green-800 font-medium transition-colors duration-150 ease-in-out">
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
