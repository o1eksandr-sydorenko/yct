import '../src/styles/global.css';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from '../src/components/layouts/MainLayout';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import { useCheckAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const checkAuth = useCheckAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <ThemeProvider>
      <CssBaseline />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
