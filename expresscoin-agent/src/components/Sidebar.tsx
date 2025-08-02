'use client';

import { useAuth } from '@/contexts/AuthContext';
import { 
  LayoutDashboard, 
  Award, 
  Package, 
  History, 
  Users, 
  Wallet, 
  LogOut,
  Menu
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'license', label: 'Lisensi', icon: Award },
    { id: 'packages', label: 'Paket', icon: Package },
    { id: 'history', label: 'Histori', icon: History },
    { id: 'referral', label: 'Referral', icon: Users },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="navbar bg-base-100 shadow-lg lg:hidden">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-fedex-purple">
            <Package className="mr-2" />
            ExpressCoin
          </a>
        </div>
        <div className="flex-none">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="btn btn-square btn-ghost"
          >
            <Menu />
          </button>
        </div>
      </div>

      <div className="drawer lg:drawer-open">
        <input 
          id="mobile-menu" 
          type="checkbox" 
          className="drawer-toggle" 
          checked={isMobileMenuOpen}
          onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
        />
        
        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="mobile-menu" className="drawer-overlay"></label>
          <aside className="min-h-full w-80 bg-base-200">
            {/* User Profile */}
            <div className="bg-gradient-to-r from-fedex-purple to-fedex-light p-6">
              <div className="flex items-center space-x-4">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-white ring-offset-2">
                    <img src={user?.avatar} alt="User Avatar" />
                  </div>
                </div>
                <div className="text-white">
                  <div className="font-bold">{user?.name}</div>
                  <div className="text-sm opacity-75">Agent Level {user?.level}</div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <ul className="menu p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <a 
                      onClick={() => {
                        onPageChange(item.id);
                        setIsMobileMenuOpen(false);
                      }} 
                      className={`menu-item ${activePage === item.id ? 'active' : ''}`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-8">
                <a onClick={handleLogout} className="text-error">
                  <LogOut className="w-5 h-5" />
                  Logout
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}