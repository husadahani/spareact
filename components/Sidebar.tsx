'use client'

import { motion } from 'framer-motion'

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
  onLogout: () => void
}

export default function Sidebar({ currentPage, onPageChange, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { id: 'license', label: 'Lisensi', icon: 'fas fa-certificate' },
    { id: 'packages', label: 'Paket', icon: 'fas fa-box' },
    { id: 'history', label: 'Histori', icon: 'fas fa-history' },
    { id: 'referral', label: 'Referral', icon: 'fas fa-users' },
    { id: 'wallet', label: 'Wallet', icon: 'fas fa-wallet' },
  ]

  return (
    <aside className="min-h-full w-80 bg-base-200">
      {/* User Profile */}
      <div className="bg-gradient-to-r from-fedex-purple to-fedex-light p-6">
        <div className="flex items-center space-x-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-white ring-offset-2">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="User Avatar" />
            </div>
          </div>
          <div className="text-white">
            <div className="font-bold">John Doe</div>
            <div className="text-sm opacity-75">Agent Level 3</div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="menu p-4 space-y-2">
        {menuItems.map((item) => (
          <motion.li key={item.id}>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPageChange(item.id)}
              className={`menu-item ${currentPage === item.id ? 'active' : ''}`}
            >
              <i className={item.icon}></i>
              {item.label}
            </motion.a>
          </motion.li>
        ))}
        <motion.li className="mt-8">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onLogout}
            className="text-error"
          >
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </motion.a>
        </motion.li>
      </ul>
    </aside>
  )
}