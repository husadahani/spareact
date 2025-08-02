'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Copy, Send, Download, Bitcoin, DollarSign } from 'lucide-react';

export default function Wallet() {
  const { user } = useAuth();
  const [showSendModal, setShowSendModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);

  const walletAddress = '0x742d35Cc6634C0532925a3b8D0A91A1D4bF5b53c';

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
  ];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    // You can add a toast notification here
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fedex-purple">Wallet</h1>
        <p className="text-gray-600">Kelola aset crypto Anda</p>
      </div>

      {/* Wallet Address */}
      <div className="card bg-base-100 shadow-lg mb-6">
        <div className="card-body">
          <h3 className="card-title text-fedex-purple">Alamat Wallet</h3>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <input 
              type="text" 
              className="input input-bordered flex-1 text-base" 
              value={walletAddress} 
              readOnly 
            />
            <button 
              onClick={handleCopyAddress}
              className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none"
            >
              <Copy className="mr-2" />
              Copy
            </button>
          </div>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="card bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-yellow-100">BNB Balance</h3>
                <div className="text-3xl font-bold">{user?.balance.bnb} BNB</div>
                <div className="text-yellow-200">≈ $890.25 USD</div>
              </div>
              <div className="text-4xl text-yellow-200">
                <Bitcoin />
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-green-100">USDT Balance</h3>
                <div className="text-3xl font-bold">{user?.balance.usdt} USDT</div>
                <div className="text-green-200">Stablecoin</div>
              </div>
              <div className="text-4xl text-green-200">
                <DollarSign />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Send/Receive Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <button 
          onClick={() => setShowSendModal(true)}
          className="btn btn-lg bg-fedex-purple hover:bg-fedex-dark text-white border-none"
        >
          <Send className="mr-2" />
          Kirim
        </button>
        <button 
          onClick={() => setShowReceiveModal(true)}
          className="btn btn-lg btn-outline btn-primary"
        >
          <Download className="mr-2" />
          Terima
        </button>
      </div>

      {/* Transaction History */}
      <div className="card bg-base-100 shadow-lg">
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
                  <tr key={index}>
                    <td><span className={`badge ${tx.typeColor}`}>{tx.type}</span></td>
                    <td>{tx.asset}</td>
                    <td className={`font-bold ${tx.amountColor}`}>{tx.amount}</td>
                    <td>{tx.fromTo}</td>
                    <td>{tx.date}</td>
                    <td><span className={`badge ${tx.statusColor}`}>{tx.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Send Modal */}
      {showSendModal && (
        <dialog className="modal modal-open">
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
              <button className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none">Kirim</button>
              <button onClick={() => setShowSendModal(false)} className="btn">Batal</button>
            </div>
          </div>
        </dialog>
      )}

      {/* Receive Modal */}
      {showReceiveModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-fedex-purple">Terima Crypto</h3>
            <div className="py-4 text-center">
              <div className="w-48 h-48 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-lg">
                <div className="text-6xl text-gray-400">QR</div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Scan QR Code atau gunakan alamat wallet di bawah</p>
              <div className="bg-base-200 p-4 rounded-lg">
                <div className="text-xs break-all">{walletAddress}</div>
              </div>
            </div>
            <div className="modal-action">
              <button 
                onClick={handleCopyAddress}
                className="btn btn-primary bg-fedex-purple hover:bg-fedex-dark border-none"
              >
                Copy Address
              </button>
              <button onClick={() => setShowReceiveModal(false)} className="btn">Tutup</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}