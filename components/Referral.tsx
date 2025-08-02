'use client'

import { motion } from 'framer-motion'

export default function Referral() {
  const referralStats = [
    {
      level: 'Level 1',
      count: '15',
      commission: '5%',
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-100'
    },
    {
      level: 'Level 2',
      count: '22',
      commission: '3%',
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-100'
    },
    {
      level: 'Level 3',
      count: '10',
      commission: '1%',
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-100'
    }
  ]

  const referralList = [
    {
      username: 'sarah_wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
      level: 'Level 1',
      levelColor: 'badge-info',
      joinDate: '2024-01-10',
      commission: '$125.30',
      status: 'Aktif',
      statusColor: 'badge-success'
    },
    {
      username: 'mike_chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      level: 'Level 2',
      levelColor: 'badge-secondary',
      joinDate: '2024-01-08',
      commission: '$89.75',
      status: 'Aktif',
      statusColor: 'badge-success'
    },
    {
      username: 'anna_kim',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      level: 'Level 3',
      levelColor: 'badge-accent',
      joinDate: '2024-01-05',
      commission: '$34.50',
      status: 'Pending',
      statusColor: 'badge-warning'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fedex-purple">Program Referral</h1>
        <p className="text-gray-600">Kelola jaringan referral Anda</p>
      </div>

      {/* Referral Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card bg-base-100 shadow-lg mb-6"
      >
        <div className="card-body">
          <h3 className="card-title text-fedex-purple">Link Referral Anda</h3>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <input 
              type="text" 
              className="input input-bordered flex-1 text-base" 
              value="https://expresscoin.app/ref/AGENT123" 
              readOnly 
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none"
            >
              <i className="fas fa-copy mr-2"></i>
              Copy Link
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Referral Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {referralStats.map((stat, index) => (
          <motion.div
            key={stat.level}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className={`card bg-gradient-to-r ${stat.color} text-white shadow-lg`}
          >
            <div className="card-body text-center">
              <div className="text-3xl font-bold">{stat.count}</div>
              <div className={stat.textColor}>{stat.level}</div>
              <div className="text-sm opacity-75">Komisi: {stat.commission}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Referral List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card bg-base-100 shadow-lg"
      >
        <div className="card-body">
          <h3 className="card-title text-fedex-purple">Daftar Referral</h3>
          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Level</th>
                  <th>Tanggal Join</th>
                  <th>Total Komisi</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {referralList.map((referral, index) => (
                  <motion.tr
                    key={referral.username}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-8 h-8 rounded-full">
                            <img src={referral.avatar} alt={referral.username} />
                          </div>
                        </div>
                        <span>{referral.username}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${referral.levelColor}`}>{referral.level}</span>
                    </td>
                    <td>{referral.joinDate}</td>
                    <td className="text-green-600 font-bold">{referral.commission}</td>
                    <td>
                      <span className={`badge ${referral.statusColor}`}>{referral.status}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}