# ExpressCoin Agent - GameFi Delivery Simulation

Platform GameFi untuk Agent Pengiriman Koin yang dibangun dengan Next.js, React, dan TypeScript.

## 🚀 Fitur

- **Single Page Application (SPA)** dengan routing client-side
- **Authentication System** dengan Google OAuth (mock)
- **Dashboard** dengan statistik real-time
- **License Management** - Basic, Premium, dan VIP Agent
- **Package Management** - Sistem pengelolaan paket pengiriman
- **History Tracking** - Riwayat pengiriman dengan filter
- **Referral Program** - Sistem referral multi-level
- **Crypto Wallet** - Manajemen aset USDT dan BNB
- **Responsive Design** - Mobile-first dengan DaisyUI
- **Dark Mode Support** - Tema otomatis sesuai preferensi sistem

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Icons**: Lucide React
- **State Management**: React Context API
- **Animations**: Framer Motion

## 📦 Installation

1. Clone repository:
```bash
git clone <repository-url>
cd expresscoin-agent
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) di browser

## 🏗️ Project Structure

```
expresscoin-agent/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout dengan AuthProvider
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── App.tsx             # Main app component
│   │   ├── LoginScreen.tsx     # Login screen
│   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   └── pages/              # Page components
│   │       ├── Dashboard.tsx
│   │       ├── License.tsx
│   │       ├── Packages.tsx
│   │       ├── History.tsx
│   │       ├── Referral.tsx
│   │       └── Wallet.tsx
│   └── contexts/
│       └── AuthContext.tsx     # Authentication context
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: `#4B0082` (FedEx Purple)
- **Secondary**: `#FF6600` (FedEx Orange)
- **Light**: `#6B46C1` (FedEx Light)
- **Dark**: `#3B0764` (FedEx Dark)

### Components
- **Cards**: DaisyUI card components dengan shadow
- **Buttons**: Custom styled buttons dengan hover effects
- **Tables**: Responsive tables dengan zebra styling
- **Modals**: DaisyUI modal components
- **Badges**: Status indicators dengan berbagai warna

## 🔧 Configuration

### Tailwind CSS
Konfigurasi custom colors dan DaisyUI plugin di `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'fedex-purple': '#4B0082',
      'fedex-orange': '#FF6600',
      'fedex-light': '#6B46C1',
      'fedex-dark': '#3B0764'
    }
  },
}
```

### Authentication
Sistem autentikasi menggunakan React Context API dengan localStorage untuk persistence:

```typescript
// Mock user data
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://...',
  level: 3,
  balance: {
    usdt: 2450.75,
    bnb: 2.45
  }
};
```

## 📱 Responsive Design

- **Mobile**: Drawer navigation dengan hamburger menu
- **Tablet**: Sidebar yang dapat di-collapse
- **Desktop**: Full sidebar dengan fixed layout

## 🔄 State Management

Menggunakan React Context API untuk:
- **Authentication State**: Login/logout dan user data
- **Page Navigation**: Active page dan routing
- **UI State**: Modal states dan form data

## 🚀 Deployment

### Build untuk Production:
```bash
npm run build
npm start
```

### Environment Variables:
Buat file `.env.local` untuk konfigurasi:
```env
NEXT_PUBLIC_APP_NAME=ExpressCoin Agent
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Support

Untuk pertanyaan atau dukungan, silakan buat issue di repository ini.

---

**ExpressCoin Agent** - Platform GameFi untuk Agent Pengiriman Koin 🚚💎
