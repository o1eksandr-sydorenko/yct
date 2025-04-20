import '../src/styles/global.css';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from '../src/components/layouts/MainLayout';
import { ThemeProvider } from '../src/contexts/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
