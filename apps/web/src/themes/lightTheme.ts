// theme/lightTheme.ts
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e8efe5',
      light: '#f5f9f3',
      dark: '#d1d9cd',
      contrastText: '#06222a',
    },
    secondary: {
      main: '#4a6b3d',
      light: '#6b8c5d',
      dark: '#2c4a1d',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f9f3',
    },
    text: {
      primary: '#06222a',
      secondary: '#0a2f3a',
    },
    success: {
      main: '#4a6b3d',
      light: '#6b8c5d',
      dark: '#2c4a1d',
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
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#06222a',
          textDecoration: 'none',
          '&:hover': {
            color: '#041a1f',
            textDecoration: 'underline',
          },
          '&:visited': {
            color: '#0a2f3a',
          },
        },
      },
    },
  },
});
export default lightTheme;
