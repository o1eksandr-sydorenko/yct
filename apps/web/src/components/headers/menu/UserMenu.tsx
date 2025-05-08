import { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import { AccountCircle, Settings, Logout, Devices } from '@mui/icons-material';

import { useRouter } from 'next/router';
import { ROUTES } from '@/constants';
import { useHeaderAuth } from '@/hooks/useAuth';

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user, isAuthenticated, logout } = useHeaderAuth();

  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleNavigation = (path: string) => {
    handleClose();
    router.push(path);
  };

  if (!isAuthenticated) {
    return (
      <IconButton color="inherit" href={ROUTES.AUTH.LOGIN}>
        <AccountCircle />
      </IconButton>
    );
  }

  return (
    <>
      <IconButton color="inherit" onClick={handleMenu}>
        <AccountCircle />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem disabled>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
            {user?.firstName} {user?.lastName}
          </Typography>
        </MenuItem>
        <MenuItem disabled>
          <Typography variant="caption" color="text.secondary">
            Last activity: {new Date(Date.now()).toDateString()}
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleNavigation(ROUTES.USER.SESSIONS)}>
          <ListItemIcon>
            <Devices fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sessions</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleNavigation(ROUTES.USER.SETTINGS)}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Log Out</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
