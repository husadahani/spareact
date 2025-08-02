'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoginScreen from './LoginScreen';
import Sidebar from './Sidebar';
import Dashboard from './pages/Dashboard';
import License from './pages/License';
import Packages from './pages/Packages';
import History from './pages/History';
import Referral from './pages/Referral';
import Wallet from './pages/Wallet';

export default function App() {
  const { isAuthenticated } = useAuth();
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'license':
        return <License />;
      case 'packages':
        return <Packages />;
      case 'history':
        return <History />;
      case 'referral':
        return <Referral />;
      case 'wallet':
        return <Wallet />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <div className="drawer-content flex flex-col">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <main className="flex-1 p-6">
        {renderPage()}
      </main>
    </div>
  );
}