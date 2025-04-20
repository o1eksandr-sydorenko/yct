import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function MainHeader() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Your Crypto Tracker
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/features">
            Features
          </Button>
          <Button color="inherit" href="/pricing">
            Pricing
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
        </Box>

        <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>
          <Button color="inherit" href="/login">
            Login
          </Button>
          <IconButton color="inherit">
            <Brightness4Icon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
