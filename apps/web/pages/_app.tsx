import '../src/styles/global.css';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from '../src/components/layouts/MainLayout';
import { ThemeProvider } from '../src/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthProvider>
    </ThemeProvider>
  );
}
