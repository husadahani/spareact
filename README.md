# ExpressCoin Agent - GameFi Delivery Simulation

Platform GameFi untuk Agent Pengiriman Koin yang dibangun dengan Next.js, React, dan TypeScript.

## Fitur

- 🚀 **Single Page Application** dengan navigasi yang smooth
- 📱 **Responsive Design** untuk desktop dan mobile
- 🎨 **Modern UI** dengan Tailwind CSS dan DaisyUI
- ✨ **Animasi** dengan Framer Motion
- 🔐 **Sistem Login** (simulasi)
- 📊 **Dashboard** dengan statistik real-time
- 📦 **Manajemen Paket** untuk pengiriman
- 💰 **Wallet Integration** untuk crypto
- 👥 **Program Referral** multi-level
- 📋 **Histori Transaksi** lengkap

## Teknologi

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Framer Motion
- **Icons**: Font Awesome
- **Deployment**: Vercel/Netlify ready

## Instalasi

1. Clone repository:
```bash
git clone <repository-url>
cd expresscoin-agent
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## Build untuk Production

```bash
npm run build
```

## Deployment

### Vercel
1. Push ke GitHub
2. Import project di Vercel
3. Deploy otomatis

### Netlify
1. Push ke GitHub
2. Import project di Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

## Struktur Proyek

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Dashboard.tsx
│   ├── History.tsx
│   ├── License.tsx
│   ├── LoginScreen.tsx
│   ├── Packages.tsx
│   ├── Referral.tsx
│   ├── Sidebar.tsx
│   └── Wallet.tsx
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Halaman

1. **Dashboard** - Ringkasan aktivitas agent
2. **Lisensi** - Pilihan lisensi agent
3. **Paket** - Paket tersedia untuk dikirim
4. **Histori** - Riwayat pengiriman
5. **Referral** - Program referral multi-level
6. **Wallet** - Manajemen crypto wallet

## Scripts

- `npm run dev` - Development server
- `npm run build` - Build production
- `npm run start` - Start production server
- `npm run lint` - Linting

## Konfigurasi

### Tailwind CSS
Konfigurasi custom colors untuk tema ExpressCoin:
- `fedex-purple`: #4B0082
- `fedex-orange`: #FF6600
- `fedex-light`: #6B46C1
- `fedex-dark`: #3B0764

### Next.js
- Static export untuk deployment
- Image optimization disabled
- Trailing slash enabled

## Lisensi

MIT License