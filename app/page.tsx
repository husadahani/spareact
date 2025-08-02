'use client'

import { useState } from 'react'
import LoginScreen from '@/components/LoginScreen'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import License from '@/components/License'
import Packages from '@/components/Packages'
import History from '@/components/History'
import Referral from '@/components/Referral'
import Wallet from '@/components/Wallet'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const handlePageChange = (page: string) => {
    setCurrentPage(page)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'license':
        return <License />
      case 'packages':
        return <Packages />
      case 'history':
        return <History />
      case 'referral':
        return <Referral />
      case 'wallet':
        return <Wallet />
      default:
        return <Dashboard />
    }
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />
  }

  return (
    <div className="bg-base-100">
      {/* Mobile Menu Button */}
      <div className="navbar bg-base-100 shadow-lg lg:hidden">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-fedex-purple">
            <i className="fas fa-shipping-fast mr-2"></i>
            ExpressCoin
          </a>
        </div>
        <div className="flex-none">
          <label htmlFor="mobile-menu" className="btn btn-square btn-ghost">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </div>

      <div className="drawer lg:drawer-open">
        <input id="mobile-menu" type="checkbox" className="drawer-toggle" />
        
        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="mobile-menu" className="drawer-overlay"></label>
          <Sidebar 
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onLogout={handleLogout}
          />
        </div>

        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          <main className="flex-1 p-6">
            {renderCurrentPage()}
          </main>
        </div>
      </div>
    </div>
  )
}