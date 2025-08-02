'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function History() {
  const [activeTab, setActiveTab] = useState('all')

  const historyData = [
    {
      id: 'PKG-156-2024',
      route: 'Jakarta → Singapore',
      status: 'Terkirim',
      statusColor: 'badge-success',
      date: '2024-01-15',
      commission: '$28.50',
      commissionColor: 'text-green-600',
      action: 'view'
    },
    {
      id: 'PKG-155-2024',
      route: 'Surabaya → Hong Kong',
      status: 'Transit',
      statusColor: 'badge-warning',
      date: '2024-01-14',
      commission: '$42.00',
      commissionColor: 'text-yellow-600',
      action: 'track'
    },
    {
      id: 'PKG-154-2024',
      route: 'Bandung → Tokyo',
      status: 'Terkirim',
      statusColor: 'badge-success',
      date: '2024-01-13',
      commission: '$55.75',
      commissionColor: 'text-green-600',
      action: 'view'
    },
    {
      id: 'PKG-153-2024',
      route: 'Jakarta → Malaysia',
      status: 'Pickup',
      statusColor: 'badge-info',
      date: '2024-01-12',
      commission: '$19.25',
      commissionColor: 'text-blue-600',
      action: 'route'
    }
  ]

  const tabs = [
    { id: 'all', label: 'Semua' },
    { id: 'delivered', label: 'Terkirim' },
    { id: 'in-transit', label: 'Dalam Perjalanan' }
  ]

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'view':
        return 'fas fa-eye'
      case 'track':
        return 'fas fa-map-marker-alt'
      case 'route':
        return 'fas fa-route'
      default:
        return 'fas fa-eye'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fedex-purple">Histori Pengiriman</h1>
        <p className="text-gray-600">Riwayat paket yang telah Anda tangani</p>
      </div>

      <div className="tabs tabs-boxed bg-base-200 mb-6">
        {tabs.map((tab) => (
          <motion.a
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </motion.a>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID Paket</th>
              <th>Rute</th>
              <th>Status</th>
              <th>Tanggal</th>
              <th>Komisi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td>{item.id}</td>
                <td>{item.route}</td>
                <td>
                  <span className={`badge ${item.statusColor}`}>{item.status}</span>
                </td>
                <td>{item.date}</td>
                <td className={`font-bold ${item.commissionColor}`}>{item.commission}</td>
                <td>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn btn-xs btn-ghost"
                  >
                    <i className={getActionIcon(item.action)}></i>
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}