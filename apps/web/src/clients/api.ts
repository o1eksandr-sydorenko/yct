import { Api } from '@your-crypto-tracker/api-client';
import { ROUTES } from '@/constants';
import { AxiosRequestConfig } from 'axios';

const apiClient = new Api({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  format: 'json',
  securityWorker: (): AxiosRequestConfig => {
    const result: AxiosRequestConfig = {
      headers: {},
    };

    const accessToken = localStorage.getItem('accessToken');

    if (result.headers && accessToken) {
      result.headers.Authorization = `Bearer ${accessToken}`;
    }

    return result;
  },
});

apiClient.instance.interceptors.response.use((response) => {
  if (response.status === 401) {
    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
    }
    window.location.href = ROUTES.AUTH.LOGIN;
  }

  return response;
});

export { apiClient };
