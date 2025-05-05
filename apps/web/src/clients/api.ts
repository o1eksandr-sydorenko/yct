import { Api } from '@your-crypto-tracker/api-client';
import { ROUTES } from '@/constants';

const api = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  customFetch: async (url: RequestInfo | URL, options: RequestInit = {}) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    try {
      const response = await fetch(url, options);

      if (response.status === 401) {
        localStorage.removeItem('accessToken');
        window.location.href = ROUTES.AUTH.LOGIN;
      }

      return response;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  },
});

export default api;
