'use client';

import { useAuth } from '@/contexts/AuthContext';
import { DollarSign, Award, Users, Package } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Saldo USDT',
      value: `$${user?.balance.usdt.toFixed(2)}`,
      icon: DollarSign,
      gradient: 'from-green-500 to-green-600',
      textColor: 'text-green-100'
    },
    {
      title: 'Lisensi Aktif',
      value: '3',
      icon: Award,
      gradient: 'from-fedex-purple to-fedex-light',
      textColor: 'text-purple-100'
    },
    {
      title: 'Total Referral',
      value: '47',
      icon: Users,
      gradient: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-100'
    },
    {
      title: 'Paket Dikirim',
      value: '156',
      icon: Package,
      gradient: 'from-orange-500 to-orange-600',
      textColor: 'text-orange-100'
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fedex-purple">Dashboard</h1>
        <p className="text-gray-600">Ringkasan aktivitas agent Anda</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`stat bg-gradient-to-r ${stat.gradient} text-white rounded-lg shadow-lg`}>
              <div className="stat-figure text-white">
                <Icon className="text-2xl" />
              </div>
              <div className={`stat-title ${stat.textColor}`}>{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Package Status */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-fedex-purple">Status Paket</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">23</div>
                <div className="text-sm text-gray-600">Belum Dikirim</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">156</div>
                <div className="text-sm text-gray-600">Sudah Dikirim</div>
              </div>
            </div>
          </div>
        </div>

        {/* Commission Stats */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-fedex-purple">Komisi</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$845.32</div>
                <div className="text-sm text-gray-600">Terkumpul</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">$234.18</div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Rewards */}
      <div className="card bg-base-100 shadow-lg mt-6">
        <div className="card-body">
          <h3 className="card-title text-fedex-purple">Reward Referral</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <div className="text-lg font-bold text-blue-600">Level 1</div>
              <div className="text-2xl font-bold text-blue-800">$342.50</div>
              <div className="text-sm text-blue-600">15 Referrals</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <div className="text-lg font-bold text-purple-600">Level 2</div>
              <div className="text-2xl font-bold text-purple-800">$198.25</div>
              <div className="text-sm text-purple-600">22 Referrals</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
              <div className="text-lg font-bold text-green-600">Level 3</div>
              <div className="text-2xl font-bold text-green-800">$89.75</div>
              <div className="text-sm text-green-600">10 Referrals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}