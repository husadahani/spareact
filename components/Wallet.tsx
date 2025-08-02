'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Wallet() {
  const [showSendModal, setShowSendModal] = useState(false)
  const [showReceiveModal, setShowReceiveModal] = useState(false)

  const transactions = [
    {
      type: 'Receive',
      typeColor: 'badge-success',
      asset: 'USDT',
      amount: '+250.00',
      amountColor: 'text-green-600',
      fromTo: '0x1234...5678',
      date: '2024-01-15',
      status: 'Confirmed',
      statusColor: 'badge-success'
    },
    {
      type: 'Send',
      typeColor: 'badge-error',
      asset: 'BNB',
      amount: '-0.5',
      amountColor: 'text-red-600',
      fromTo: '0x9876...4321',
      date: '2024-01-14',
      status: 'Confirmed',
      statusColor: 'badge-success'
    },
    {
      type: 'Receive',
      typeColor: 'badge-success',
      asset: 'USDT',
      amount: '+125.50',
      amountColor: 'text-green-600',
      fromTo: 'Commission',
      date: '2024-01-13',
      status: 'Confirmed',
      statusColor: 'badge-success'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fedex-purple">Wallet</h1>
        <p className="text-gray-600">Kelola aset crypto Anda</p>
      </div>

      {/* Wallet Address */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card bg-base-100 shadow-lg mb-6"
      >
        <div className="card-body">
          <h3 className="card-title text-fedex-purple">Alamat Wallet</h3>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <input 
              type="text" 
              className="input input-bordered flex-1 text-base" 
              value="0x742d35Cc6634C0532925a3b8D0A91A1D4bF5b53c" 
              readOnly 
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none"
            >
              <i className="fas fa-copy mr-2"></i>
              Copy
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="card bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg"
        >
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-yellow-100">BNB Balance</h3>
                <div className="text-3xl font-bold">2.45 BNB</div>
                <div className="text-yellow-200">≈ $890.25 USD</div>
              </div>
              <div className="text-4xl text-yellow-200">
                <i className="fab fa-bitcoin"></i>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="card bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
        >
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-green-100">USDT Balance</h3>
                <div className="text-3xl font-bold">2,450.75 USDT</div>
                <div className="text-green-200">Stablecoin</div>
              </div>
              <div className="text-4xl text-green-200">
                <i className="fas fa-dollar-sign"></i>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Send/Receive Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSendModal(true)}
          className="btn btn-lg bg-fedex-purple hover:bg-fedex-dark text-white border-none"
        >
          <i className="fas fa-paper-plane mr-2"></i>
          Kirim
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowReceiveModal(true)}
          className="btn btn-lg btn-outline btn-primary"
        >
          <i className="fas fa-download mr-2"></i>
          Terima
        </motion.button>
      </div>

      {/* Transaction History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card bg-base-100 shadow-lg"
      >
        <div className="card-body">
          <h3 className="card-title text-fedex-purple">Histori Transaksi</h3>
          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Asset</th>
                  <th>Amount</th>
                  <th>From/To</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <td>
                      <span className={`badge ${tx.typeColor}`}>{tx.type}</span>
                    </td>
                    <td>{tx.asset}</td>
                    <td className={`font-bold ${tx.amountColor}`}>{tx.amount}</td>
                    <td>{tx.fromTo}</td>
                    <td>{tx.date}</td>
                    <td>
                      <span className={`badge ${tx.statusColor}`}>{tx.status}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Send Modal */}
      {showSendModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-fedex-purple">Kirim Crypto</h3>
            <div className="py-4">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Pilih Asset</span>
                </label>
                <select className="select select-bordered w-full text-base">
                  <option>USDT</option>
                  <option>BNB</option>
                </select>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Alamat Tujuan</span>
                </label>
                <input type="text" className="input input-bordered w-full text-base" placeholder="0x..." />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Jumlah</span>
                </label>
                <input type="number" className="input input-bordered w-full text-base" placeholder="0.00" />
              </div>
            </div>
            <div className="modal-action">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none"
              >
                Kirim
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSendModal(false)}
                className="btn"
              >
                Batal
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Receive Modal */}
      {showReceiveModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-fedex-purple">Terima Crypto</h3>
            <div className="py-4 text-center">
              <div className="w-48 h-48 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-lg">
                <i className="fas fa-qrcode text-6xl text-gray-400"></i>
              </div>
              <p className="text-sm text-gray-600 mb-4">Scan QR Code atau gunakan alamat wallet di bawah</p>
              <div className="bg-base-200 p-4 rounded-lg">
                <div className="text-xs break-all">0x742d35Cc6634C0532925a3b8D0A91A1D4bF5b53c</div>
              </div>
            </div>
            <div className="modal-action">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none"
              >
                Copy Address
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowReceiveModal(false)}
                className="btn"
              >
                Tutup
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}