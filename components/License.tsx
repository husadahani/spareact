'use client'

import { motion } from 'framer-motion'

export default function License() {
  const licenses = [
    {
      name: 'Basic Agent',
      price: '$50 USDT',
      icon: 'fas fa-star',
      color: 'blue',
      features: [
        '5 Paket per hari',
        'Komisi 3%',
        'Referral Level 1',
        'Support 24/7'
      ],
      popular: false
    },
    {
      name: 'Premium Agent',
      price: '$150 USDT',
      icon: 'fas fa-crown',
      color: 'purple',
      features: [
        '15 Paket per hari',
        'Komisi 5%',
        'Referral Level 1-2',
        'Priority Support',
        'Bonus Mingguan'
      ],
      popular: true
    },
    {
      name: 'VIP Agent',
      price: '$500 USDT',
      icon: 'fas fa-gem',
      color: 'yellow',
      features: [
        'Unlimited Paket',
        'Komisi 8%',
        'Referral Level 1-3',
        'VIP Support',
        'Bonus Bulanan',
        'NFT Exclusive'
      ],
      popular: false
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          button: 'bg-blue-600 hover:bg-blue-700'
        }
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-fedex-purple',
          border: 'border-fedex-purple',
          button: 'bg-fedex-purple hover:bg-fedex-dark'
        }
      case 'yellow':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-600',
          border: 'border-yellow-400',
          button: 'bg-yellow-600 hover:bg-yellow-700'
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200',
          button: 'bg-gray-600 hover:bg-gray-700'
        }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fedex-purple">Lisensi Agent</h1>
        <p className="text-gray-600">Pilih lisensi yang sesuai dengan kebutuhan Anda</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {licenses.map((license, index) => {
          const colors = getColorClasses(license.color)
          return (
            <motion.div
              key={license.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card bg-base-100 shadow-lg border-2 ${colors.border} relative`}
            >
              {license.popular && (
                <div className="badge badge-secondary absolute top-4 right-4">Popular</div>
              )}
              <div className="card-body">
                <div className="text-center">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${license.icon} text-2xl ${colors.text}`}></i>
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>{license.name}</h3>
                  <div className="text-3xl font-bold my-4">{license.price}</div>
                  <ul className="text-left space-y-2 text-sm">
                    {license.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`btn btn-primary ${colors.button} border-none w-full mt-4`}
                  >
                    Beli Lisensi
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}