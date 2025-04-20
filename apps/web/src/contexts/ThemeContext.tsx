import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const THEME_KEY = 'theme-preference';

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => null,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Always start with false for SSR
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme after mount
  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark') {
      setIsDarkMode(true);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode, isInitialized]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Don't render children until client-side initialization is complete
  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
