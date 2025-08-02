'use client';

import { Star, Crown, Gem } from 'lucide-react';

export default function License() {
  const licenses = [
    {
      name: 'Basic Agent',
      price: '$50 USDT',
      icon: Star,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      features: [
        '5 Paket per hari',
        'Komisi 3%',
        'Referral Level 1',
        'Support 24/7'
      ],
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      borderColor: 'border-gray-200'
    },
    {
      name: 'Premium Agent',
      price: '$150 USDT',
      icon: Crown,
      iconColor: 'text-fedex-purple',
      bgColor: 'bg-purple-100',
      features: [
        '15 Paket per hari',
        'Komisi 5%',
        'Referral Level 1-2',
        'Priority Support',
        'Bonus Mingguan'
      ],
      buttonColor: 'bg-fedex-purple hover:bg-fedex-dark',
      borderColor: 'border-fedex-purple',
      isPopular: true
    },
    {
      name: 'VIP Agent',
      price: '$500 USDT',
      icon: Gem,
      iconColor: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      features: [
        'Unlimited Paket',
        'Komisi 8%',
        'Referral Level 1-3',
        'VIP Support',
        'Bonus Bulanan',
        'NFT Exclusive'
      ],
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
      borderColor: 'border-yellow-400'
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fedex-purple">Lisensi Agent</h1>
        <p className="text-gray-600">Pilih lisensi yang sesuai dengan kebutuhan Anda</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {licenses.map((license, index) => {
          const Icon = license.icon;
          return (
            <div key={index} className={`card bg-base-100 shadow-lg border-2 ${license.borderColor} relative`}>
              {license.isPopular && (
                <div className="badge badge-secondary absolute top-4 right-4">Popular</div>
              )}
              <div className="card-body">
                <div className="text-center">
                  <div className={`w-16 h-16 ${license.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`text-2xl ${license.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${license.iconColor}`}>{license.name}</h3>
                  <div className="text-3xl font-bold my-4">{license.price}</div>
                  <ul className="text-left space-y-2 text-sm">
                    {license.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`btn btn-primary ${license.buttonColor} border-none w-full mt-4`}>
                    Beli Lisensi
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}