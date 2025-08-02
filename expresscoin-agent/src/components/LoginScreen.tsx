'use client';

import { useAuth } from '@/contexts/AuthContext';
import { Truck } from 'lucide-react';

export default function LoginScreen() {
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fedex-purple to-fedex-light">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body items-center text-center">
          <div className="w-20 h-20 bg-fedex-purple rounded-full flex items-center justify-center mb-4">
            <Truck className="text-3xl text-white" />
          </div>
          <h2 className="card-title text-2xl font-bold text-fedex-purple">ExpressCoin Agent</h2>
          <p className="text-gray-600 mb-6">Platform GameFi untuk Agent Pengiriman Koin</p>
          <button 
            onClick={handleLogin} 
            className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none w-full"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Login dengan Google
          </button>
        </div>
      </div>
    </div>
  );
}