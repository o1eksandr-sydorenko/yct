import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  textTransform: 'none',
}));
