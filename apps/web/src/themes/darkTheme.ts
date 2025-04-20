import { createTheme } from '@mui/material/styles';
import lightTheme from './lightTheme';

const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#1565c0', // Darker blue
      light: '#1976d2',
      dark: '#0d47a1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7b1fa2', // Darker purple
      light: '#9c27b0',
      dark: '#6a1b9a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212', // Material Dark theme background
      paper: '#1e1e1e', // Slightly lighter than background
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    success: {
      main: '#2e7d32', // Keep the same success colors for consistency
      light: '#4caf50',
      dark: '#1b5e20',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
    },
  },
  components: {
    ...lightTheme.components,
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

export default darkTheme;
