'use client'

import { motion } from 'framer-motion'

export default function Packages() {
  const packages = [
    {
      id: 'PKG-001-2024',
      status: 'Siap Kirim',
      statusColor: 'badge-success',
      commission: '$25.50',
      origin: 'Jakarta, Indonesia',
      destination: 'Singapore',
      weight: '2.5 kg',
      deadline: '2 hari',
      deadlineColor: 'text-red-600'
    },
    {
      id: 'PKG-002-2024',
      status: 'Priority',
      statusColor: 'badge-warning',
      commission: '$45.75',
      origin: 'Surabaya, Indonesia',
      destination: 'Hong Kong',
      weight: '5.0 kg',
      deadline: '1 hari',
      deadlineColor: 'text-orange-600'
    },
    {
      id: 'PKG-003-2024',
      status: 'Express',
      statusColor: 'badge-info',
      commission: '$62.30',
      origin: 'Bandung, Indonesia',
      destination: 'Tokyo, Japan',
      weight: '1.8 kg',
      deadline: '3 hari',
      deadlineColor: 'text-green-600'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fedex-purple">Paket Tersedia</h1>
        <p className="text-gray-600">Pilih paket yang siap untuk dikirim</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card bg-base-100 shadow-lg"
          >
            <div className="card-body">
              <div className="flex justify-between items-start mb-4">
                <div className={`badge ${pkg.statusColor}`}>{pkg.status}</div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{pkg.commission}</div>
                  <div className="text-sm text-gray-600">Komisi</div>
                </div>
              </div>
              <h3 className="font-bold text-lg">{pkg.id}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Asal:</span>
                  <span>{pkg.origin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tujuan:</span>
                  <span>{pkg.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Berat:</span>
                  <span>{pkg.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Deadline:</span>
                  <span className={pkg.deadlineColor}>{pkg.deadline}</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none w-full mt-4"
              >
                <i className="fas fa-truck mr-2"></i>
                Ambil Paket
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}