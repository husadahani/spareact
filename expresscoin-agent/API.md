# ExpressCoin Agent API Documentation

## Overview

ExpressCoin Agent adalah platform GameFi untuk agent pengiriman koin yang menggunakan teknologi blockchain dan crypto.

## Authentication

### Login dengan Google OAuth
```http
POST /api/auth/google
Content-Type: application/json

{
  "token": "google_oauth_token"
}
```

### Response
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://...",
    "level": 3,
    "balance": {
      "usdt": 2450.75,
      "bnb": 2.45
    }
  }
}
```

## Packages

### Get Available Packages
```http
GET /api/packages
Authorization: Bearer <token>
```

### Pick Package
```http
POST /api/packages/:id/pick
Authorization: Bearer <token>
```

### Complete Package
```http
POST /api/packages/:id/complete
Authorization: Bearer <token>
```

## Licenses

### Get Available Licenses
```http
GET /api/licenses
Authorization: Bearer <token>
```

### Purchase License
```http
POST /api/licenses/:id/purchase
Authorization: Bearer <token>

{
  "paymentMethod": "usdt",
  "amount": 150
}
```

## Referrals

### Get Referral Stats
```http
GET /api/referrals/stats
Authorization: Bearer <token>
```

### Get Referral List
```http
GET /api/referrals/list
Authorization: Bearer <token>
```

## Wallet

### Get Wallet Balance
```http
GET /api/wallet/balance
Authorization: Bearer <token>
```

### Send Transaction
```http
POST /api/wallet/send
Authorization: Bearer <token>

{
  "asset": "usdt",
  "amount": 100,
  "toAddress": "0x..."
}
```

### Get Transaction History
```http
GET /api/wallet/transactions
Authorization: Bearer <token>
```

## Error Responses

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## Status Codes

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting

- 100 requests per minute per user
- 1000 requests per hour per user

## WebSocket Events

### Real-time Updates

```javascript
// Connect to WebSocket
const ws = new WebSocket('wss://api.expresscoin.app/ws');

// Listen for package updates
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'package_update') {
    // Update UI
  }
};
```

## Future Integrations

- **Blockchain Integration**: Smart contracts untuk transaksi
- **Payment Gateway**: Integrasi dengan payment processor
- **Real-time Tracking**: GPS tracking untuk paket
- **AI/ML**: Prediksi rute optimal
- **Mobile App**: React Native app