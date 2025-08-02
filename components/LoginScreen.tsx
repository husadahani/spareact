'use client'

import { motion } from 'framer-motion'

interface LoginScreenProps {
  onLogin: () => void
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fedex-purple to-fedex-light"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card w-96 bg-base-100 shadow-2xl"
      >
        <div className="card-body items-center text-center">
          <motion.div 
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 bg-fedex-purple rounded-full flex items-center justify-center mb-4"
          >
            <i className="fas fa-shipping-fast text-3xl text-white"></i>
          </motion.div>
          <h2 className="card-title text-2xl font-bold text-fedex-purple">ExpressCoin Agent</h2>
          <p className="text-gray-600 mb-6">Platform GameFi untuk Agent Pengiriman Koin</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLogin}
            className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none w-full"
          >
            <i className="fab fa-google mr-2"></i>
            Login dengan Google
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}