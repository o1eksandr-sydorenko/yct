// theme/darkTheme.ts
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7c4dff' }, // Purple
    secondary: { main: '#651fff' }, // Indigo accent
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default darkTheme;
