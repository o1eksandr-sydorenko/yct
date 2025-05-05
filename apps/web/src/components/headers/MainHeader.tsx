import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileMenu } from './menu/MobileMenu';
import { DesktopMenu } from './menu/DesktopMenu';
import { useTheme } from '../../contexts/ThemeContext';
import { menuItems } from './constants';
import { UserMenu } from './menu/UserMenu';

const MainHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const { isDarkMode, toggleTheme } = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Your Crypto Tracker
        </Typography>

        {!isMobile && <DesktopMenu menuItems={menuItems} />}

        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            aria-label="toggle theme"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <UserMenu />
        </Box>

        {isMobile && (
          <MobileMenu
            open={mobileOpen}
            onClose={handleDrawerToggle}
            menuItems={menuItems}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
