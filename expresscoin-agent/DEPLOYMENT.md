# ExpressCoin Agent - Deployment Guide

## Prerequisites

- Node.js 18+ 
- npm atau yarn
- Git
- Domain name (opsional)

## Local Development

### 1. Clone Repository
```bash
git clone <repository-url>
cd expresscoin-agent
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env.local
# Edit .env.local sesuai kebutuhan
```

### 4. Run Development Server
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

## Production Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy to Vercel**
```bash
vercel
```

3. **Set Environment Variables**
```bash
vercel env add NEXT_PUBLIC_APP_NAME
vercel env add NEXT_PUBLIC_APP_URL
```

### Option 2: Docker

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **Build and Run**
```bash
docker build -t expresscoin-agent .
docker run -p 3000:3000 expresscoin-agent
```

### Option 3: Traditional Server

1. **Build Application**
```bash
npm run build
```

2. **Start Production Server**
```bash
npm start
```

3. **Setup PM2 (Optional)**
```bash
npm install -g pm2
pm2 start npm --name "expresscoin-agent" -- start
pm2 save
pm2 startup
```

## Environment Variables

### Required
```env
NEXT_PUBLIC_APP_NAME=ExpressCoin Agent
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Optional (for future features)
```env
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database
DATABASE_URL=your_database_url

# Blockchain
WEB3_PROVIDER_URL=your_web3_provider_url
CONTRACT_ADDRESS=your_smart_contract_address
```

## Performance Optimization

### 1. Image Optimization
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
}
```

### 2. Bundle Analysis
```bash
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

### 3. Caching Strategy
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## Monitoring & Analytics

### 1. Vercel Analytics
```bash
npm install @vercel/analytics
```

### 2. Google Analytics
```javascript
// _app.tsx
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
```

## Security

### 1. Content Security Policy
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ]
  },
}
```

### 2. HTTPS Redirect
```javascript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    if (request.headers.get('x-forwarded-proto') !== 'https') {
      return NextResponse.redirect(
        `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
        301
      )
    }
  }
  return NextResponse.next()
}
```

## Troubleshooting

### Common Issues

1. **Build Errors**
```bash
# Clear cache
rm -rf .next
npm run build
```

2. **Memory Issues**
```bash
# Increase Node.js memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

3. **Port Conflicts**
```bash
# Use different port
npm run dev -- -p 3001
```

### Performance Monitoring

1. **Lighthouse Audit**
```bash
npm install -g lighthouse
lighthouse https://your-domain.com
```

2. **Core Web Vitals**
- Use Google PageSpeed Insights
- Monitor in Google Search Console

## Backup & Recovery

### 1. Database Backup (Future)
```bash
# PostgreSQL
pg_dump your_database > backup.sql

# MongoDB
mongodump --db your_database
```

### 2. File Backup
```bash
# Backup uploads
tar -czf uploads-backup.tar.gz ./public/uploads/
```

## Scaling

### 1. Horizontal Scaling
- Use load balancer
- Deploy multiple instances
- Use CDN for static assets

### 2. Vertical Scaling
- Increase server resources
- Optimize database queries
- Use caching strategies

## Support

Untuk bantuan deployment, silakan:
1. Cek dokumentasi Next.js
2. Buat issue di repository
3. Hubungi tim development

---

**ExpressCoin Agent** - Platform GameFi untuk Agent Pengiriman Koin 🚚💎