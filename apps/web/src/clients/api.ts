import { Api } from '@your-crypto-tracker/api-client';

const api = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
});

export default api;
