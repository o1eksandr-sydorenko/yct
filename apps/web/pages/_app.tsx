import '../src/styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from '../src/components/layouts/MainLayout';
import { ThemeProvider, useTheme } from '../src/contexts/ThemeContext';

function ThemedApp({ Component, pageProps }: AppProps) {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default function App(props: AppProps) {
  return (
    <ThemeProvider>
      <ThemedApp {...props} />
    </ThemeProvider>
  );
}
