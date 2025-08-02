'use client';

import { useState } from 'react';
import { Eye, MapPin, Route } from 'lucide-react';

export default function History() {
  const [activeTab, setActiveTab] = useState('all');

  const historyData = [
    {
      id: 'PKG-156-2024',
      route: 'Jakarta → Singapore',
      status: 'Terkirim',
      statusColor: 'badge-success',
      date: '2024-01-15',
      commission: '$28.50',
      commissionColor: 'text-green-600',
      action: 'view',
      actionIcon: Eye
    },
    {
      id: 'PKG-155-2024',
      route: 'Surabaya → Hong Kong',
      status: 'Transit',
      statusColor: 'badge-warning',
      date: '2024-01-14',
      commission: '$42.00',
      commissionColor: 'text-yellow-600',
      action: 'track',
      actionIcon: MapPin
    },
    {
      id: 'PKG-154-2024',
      route: 'Bandung → Tokyo',
      status: 'Terkirim',
      statusColor: 'badge-success',
      date: '2024-01-13',
      commission: '$55.75',
      commissionColor: 'text-green-600',
      action: 'view',
      actionIcon: Eye
    },
    {
      id: 'PKG-153-2024',
      route: 'Jakarta → Malaysia',
      status: 'Pickup',
      statusColor: 'badge-info',
      date: '2024-01-12',
      commission: '$19.25',
      commissionColor: 'text-blue-600',
      action: 'route',
      actionIcon: Route
    }
  ];

  const tabs = [
    { id: 'all', label: 'Semua' },
    { id: 'delivered', label: 'Terkirim' },
    { id: 'in-transit', label: 'Dalam Perjalanan' }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fedex-purple">Histori Pengiriman</h1>
        <p className="text-gray-600">Riwayat paket yang telah Anda tangani</p>
      </div>

      <div className="tabs tabs-boxed bg-base-200 mb-6">
        {tabs.map((tab) => (
          <a 
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </a>
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
            {historyData.map((item, index) => {
              const ActionIcon = item.actionIcon;
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.route}</td>
                  <td><span className={`badge ${item.statusColor}`}>{item.status}</span></td>
                  <td>{item.date}</td>
                  <td className={`font-bold ${item.commissionColor}`}>{item.commission}</td>
                  <td>
                    <button className="btn btn-xs btn-ghost">
                      <ActionIcon className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}