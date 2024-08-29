import React from 'react';
import LoginForm from '../../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
