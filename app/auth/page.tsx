'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { handleLogin, handleRegister } from './utils/authUtils';
interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [errorLogin, setErrorLogin] = useState('');
  const router = useRouter();

  const onLogin = async (data: LoginData) => {
    const result = await handleLogin(data);
    if (result.success) {

      router.push('/home');
    } else {
      // Handle error, maybe set an error state to display to the user
      setErrorLogin('Error logging in, please check your credentials');
    }
  };

  const onRegister = async (data: RegisterData) => {
    const result = await handleRegister(data);
    if (result.success) {
      setIsLogin(true);
    } else {
      // Handle error, maybe set an error state to display to the user
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {isLogin ? 'Sign in to your account' : 'Create a new account'}
        </h2>
        {isLogin ? (
          <LoginForm onSubmit={onLogin} />
        ) : (
          <RegisterForm onSubmit={onRegister} />
        )}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          <p className='text-red-500'>{errorLogin}</p>
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}

        </button>
      </div>
    </div>
  );
}